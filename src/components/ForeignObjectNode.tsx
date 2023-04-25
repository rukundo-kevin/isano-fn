import { CustomNodeElementProps } from "react-d3-tree/lib/types/types/common";
import { FaAngleDoubleDown, FaAngleDoubleRight } from "react-icons/fa";

interface ForeignObject {
  width: number;
  height: number;
}
export default function renderForeignObjectNode(
  customNodeProps: CustomNodeElementProps,
  foreignObjectProps: ForeignObject,
  handleNodeClick: any
) {
  const { nodeDatum, toggleNode } = customNodeProps;

  return (
    <g>
      {nodeDatum.attributes?.photo ? (
        <image
          href={nodeDatum.attributes.photo.toString()}
          height="60"
          width="60"
          x="-30"
          onClick={() => {
            nodeDatum.attributes &&
              handleNodeClick(nodeDatum.attributes.photo.toString());
          }}
          className="border-2 outline-red-500"
        />
      ) : (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60.671 60.671"
          xmlSpace="preserve"
          height={40}
          width={50}
          x={-25}
        >
          <g>
            <g>
              <ellipse
                style={{ fill: "#010002" }}
                cx="30.336"
                cy="12.097"
                rx="11.997"
                ry="12.097"
              />
              <path
                style={{ fill: "#010002" }}
                d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
          C48.354,35.818,42.661,30.079,35.64,30.079z"
              />
            </g>
          </g>
        </svg>
      )}

      <foreignObject {...foreignObjectProps}>
        <div
          className={`rounded-md mt-4 border-black shadow-sm ${
            nodeDatum.__rd3t.collapsed
              ? "bg-gray-300 "
              : "bg-primary text-white"
          } `}
        >
          <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
          {nodeDatum.children && (
            <button
              className="w-full flex justify-center p-1"
              onClick={toggleNode}
            >
              {nodeDatum.__rd3t.collapsed ? (
                <FaAngleDoubleRight />
              ) : (
                <FaAngleDoubleDown />
              )}
            </button>
          )}
        </div>
      </foreignObject>
    </g>
  );
}
