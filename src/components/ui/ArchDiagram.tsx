import type { ArchDiagram as ArchDiagramData, NodeKind } from '@/content/types';

/*
 * Architecture diagrams rendered from data.
 *
 * No external library: this has to survive a static export, work in both
 * themes, and stay diffable in git. Nodes are placed on a row grid rather than
 * by a layout engine, which is enough for the ~12-node topologies that are
 * worth drawing at all and avoids shipping a graph library to draw six boxes.
 *
 * Accessibility: the SVG carries a title/desc pair, and the same topology is
 * rendered as a plain list underneath for screen readers and for anyone who
 * would simply rather read it. The list is not a fallback — it is always
 * correct, because both come from the same data.
 */

const NODE_W = 168;
const NODE_H = 60;
const GAP_X = 28;
const GAP_Y = 78;
const PAD = 20;

const KIND_CLASS: Record<NodeKind, string> = {
  external: 'fill-transparent stroke-muted',
  edge: 'fill-transparent stroke-accent',
  service: 'fill-transparent stroke-accent2',
  store: 'fill-transparent stroke-secondary',
  host: 'fill-transparent stroke-accent',
  network: 'fill-transparent stroke-muted',
};

interface Placed {
  id: string;
  x: number;
  y: number;
}

export function ArchDiagram({ data }: { data: ArchDiagramData }) {
  const cols = Math.max(...data.rows.map((r) => r.length));
  const width = cols * NODE_W + (cols - 1) * GAP_X + PAD * 2;
  const height = data.rows.length * NODE_H + (data.rows.length - 1) * GAP_Y + PAD * 2;

  // Rows are centred against the widest row so the diagram reads as a column.
  const placed: Record<string, Placed> = {};
  data.rows.forEach((row, rowIndex) => {
    const rowWidth = row.length * NODE_W + (row.length - 1) * GAP_X;
    const startX = (width - rowWidth) / 2;
    row.forEach((id, colIndex) => {
      placed[id] = {
        id,
        x: startX + colIndex * (NODE_W + GAP_X),
        y: PAD + rowIndex * (NODE_H + GAP_Y),
      };
    });
  });

  const nodeById = Object.fromEntries(data.nodes.map((n) => [n.id, n]));
  const titleId = `arch-${data.caption.replace(/\W+/g, '-').toLowerCase()}`;

  return (
    <figure className="my-8">
      {/* Wide diagrams scroll inside their own container; the page body must
          never scroll horizontally. */}
      <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface-strong/40 p-4">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          role="img"
          aria-labelledby={titleId}
          className="max-w-none text-muted"
        >
          <title id={titleId}>{data.caption}</title>

          <defs>
            <marker
              id="arch-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 7 4 L 0 7 z" className="fill-current" />
            </marker>
          </defs>

          {/* Edges first so nodes paint over the line ends. */}
          {data.edges.map((edge, i) => {
            const a = placed[edge.from];
            const b = placed[edge.to];
            if (!a || !b) return null;

            const x1 = a.x + NODE_W / 2;
            const y1 = a.y + NODE_H;
            const x2 = b.x + NODE_W / 2;
            const y2 = b.y;
            const midY = (y1 + y2) / 2;

            return (
              <g
                key={`${edge.from}-${edge.to}-${i}`}
                className={
                  edge.trust === 'public'
                    ? 'text-accent'
                    : edge.trust === 'private'
                      ? 'text-accent2'
                      : 'text-muted-soft'
                }
              >
                <path
                  d={`M ${x1} ${y1} V ${midY} H ${x2} V ${y2}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeDasharray={edge.trust === 'public' ? '5 4' : undefined}
                  markerEnd="url(#arch-arrow)"
                  opacity={0.75}
                />
                {edge.label && (
                  <text
                    x={(x1 + x2) / 2}
                    y={midY - 6}
                    textAnchor="middle"
                    className="fill-current font-mono"
                    fontSize={10}
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {data.nodes.map((node) => {
            const p = placed[node.id];
            if (!p) return null;
            return (
              <g key={node.id}>
                <rect
                  x={p.x}
                  y={p.y}
                  width={NODE_W}
                  height={NODE_H}
                  rx={8}
                  className={KIND_CLASS[node.kind]}
                  strokeWidth={1.5}
                  opacity={0.9}
                />
                <text
                  x={p.x + NODE_W / 2}
                  y={p.y + (node.sub ? 25 : 35)}
                  textAnchor="middle"
                  className="fill-foreground font-mono"
                  fontSize={12}
                  fontWeight={600}
                >
                  {node.label}
                </text>
                {node.sub && (
                  <text
                    x={p.x + NODE_W / 2}
                    y={p.y + 42}
                    textAnchor="middle"
                    className="fill-current font-mono"
                    fontSize={10}
                    opacity={0.8}
                  >
                    {node.sub}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Same data, read as prose. Not a fallback — an equivalent. */}
      <details className="mt-3 text-sm">
        <summary className="cursor-pointer font-mono text-xs text-muted hover:text-foreground transition-colors">
          Read this diagram as text
        </summary>
        <ul className="mt-3 space-y-1.5 text-muted border-l border-border-subtle pl-4">
          {data.edges.map((edge, i) => (
            <li key={i}>
              <span className="text-foreground">{nodeById[edge.from]?.label ?? edge.from}</span>
              {' → '}
              <span className="text-foreground">{nodeById[edge.to]?.label ?? edge.to}</span>
              {edge.protocol && <span className="font-mono text-xs"> ({edge.protocol})</span>}
              {edge.trust === 'public' && (
                <span className="text-accent text-xs"> — crosses to the public internet</span>
              )}
            </li>
          ))}
        </ul>
      </details>

      <figcaption className="mt-3 text-xs text-muted-soft font-mono">{data.caption}</figcaption>
    </figure>
  );
}
