import { useNavigate } from "react-router-dom";
import { worksData, servicesData } from "@utils";

export function FormServices() {
  const navigate = useNavigate();
  const renderList = servicesData.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.header}</p>
        <p>{item.description}</p>
        <span onClick={() => navigate(item.url)}>
          {item.btn}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
      </div>
    );
  });
  return <>{renderList}</>;
}

export function FormWorks(className: string) {
  const lastFourItems = worksData.slice(0, 4);
  const renderList = lastFourItems.map((item, index) => {
    return (
      <div key={index}>
        <span>{item.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    );
  });
  return (
    <>
      <section className={className}>
        <span>our works</span>
        <span>Projects [{counter(worksData.length)}]</span>
      </section>
      {renderList}
    </>
  );
}

const counter = (length: number) => length;
