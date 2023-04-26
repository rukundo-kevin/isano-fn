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
      ) : nodeDatum.attributes?.gender !== "Female" ? (
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
      ) : (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          height={40}
          width={50}
          x={-25}
        >
          <path
            fill="#141f38"
            className="cls-1"
            d="M97.19,344.56a74.43,74.43,0,0,1-3.45-26.46L102.4,153.6a153.6,153.6,0,0,1,307.2,0l8.66,164.49a74.43,74.43,0,0,1-3.45,26.46,184.59,184.59,0,0,0-82-44.66V277.8A114.61,114.61,0,0,0,371.2,192V160a44.85,44.85,0,0,0-44.8-44.8H185.6A44.85,44.85,0,0,0,140.8,160v29.11a119,119,0,0,0,38.4,87.79v23A184.59,184.59,0,0,0,97.19,344.56Zm103-83.31,4.61,3.84v45.18l51.2,32.9,51.2-32.9V265.73l4.8-3.84A89.2,89.2,0,0,0,345.6,192V160a19.26,19.26,0,0,0-19.2-19.2H185.6A19.26,19.26,0,0,0,166.4,160v29.12A93.45,93.45,0,0,0,200.19,261.25Zm130.24,64.51L256,373.63l-74.43-47.87C112.7,344.58,64,420.29,64,492.8A19.26,19.26,0,0,0,83.2,512H428.8A19.26,19.26,0,0,0,448,492.8C448,420.29,399.3,344.58,330.43,325.76Z"
          />
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
