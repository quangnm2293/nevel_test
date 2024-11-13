import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex h-[80px] mb-5 lg:hidden">
      <div
        onClick={() => setActiveTab(0)}
        className={activeTab === 0 ? "tab-container-active" : "tab-container"}
      >
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7083 0.273143L18.7859 7.39878C19.0137 7.59973 19.0354 7.94729 18.8345 8.17508C18.7301 8.29343 18.5799 8.36123 18.4221 8.36123H15.4786V14.9C15.4786 15.5075 14.9861 16 14.3786 16H11.6297L11.63 12.1931C11.63 11.3301 10.9673 10.6219 10.123 10.5498L9.98066 10.5437C9.06973 10.5437 8.33128 11.2822 8.33128 12.1931L8.33066 16H5.58273C4.97521 16 4.48273 15.5075 4.48273 14.9V8.36123H1.53926C1.2355 8.36123 0.989258 8.11499 0.989258 7.81123C0.989258 7.65341 1.05706 7.50319 1.17541 7.39878L9.25296 0.273143C9.66876 -0.093652 10.2926 -0.093652 10.7083 0.273143Z"
          />
        </svg>
        <p className="text-unactive">HOME</p>
      </div>
      <div
        onClick={() => setActiveTab(1)}
        className={activeTab === 1 ? "tab-container-active" : "tab-container"}
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 6C15.5523 6 16 6.44772 16 7V14C16 14.5523 15.5523 15 15 15H1C0.447715 15 0 14.5523 0 14V7C0 6.44772 0.447715 6 1 6H15ZM14 3C14.5523 3 15 3.44772 15 4V5H1V4C1 3.44772 1.44772 3 2 3H14ZM12 0C12.5523 0 13 0.447715 13 1V2H3V1C3 0.447715 3.44772 0 4 0H12Z"
          />
        </svg>
        <p className="text-unactive">TIMELINE</p>
      </div>
      <div
        onClick={() => setActiveTab(2)}
        className={activeTab === 2 ? "tab-container-active" : "tab-container"}
      >
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.3395 10C4.56238 10 4.6432 10.0232 4.72468 10.0668C4.80616 10.1104 4.87011 10.1743 4.91369 10.2558C4.95726 10.3373 4.98047 10.4181 4.98047 10.641V13.359C4.98047 13.5819 4.95726 13.6627 4.91369 13.7442C4.87011 13.8257 4.80616 13.8896 4.72468 13.9332C4.6432 13.9768 4.56238 14 4.3395 14H1.62144C1.39856 14 1.31774 13.9768 1.23626 13.9332C1.15478 13.8896 1.09083 13.8257 1.04725 13.7442C1.00368 13.6627 0.980469 13.5819 0.980469 13.359V10.641C0.980469 10.4181 1.00368 10.3373 1.04725 10.2558C1.09083 10.1743 1.15478 10.1104 1.23626 10.0668C1.31774 10.0232 1.39856 10 1.62144 10H4.3395ZM9.3395 10C9.56238 10 9.6432 10.0232 9.72468 10.0668C9.80616 10.1104 9.87011 10.1743 9.91369 10.2558C9.95726 10.3373 9.98047 10.4181 9.98047 10.641V13.359C9.98047 13.5819 9.95726 13.6627 9.91369 13.7442C9.87011 13.8257 9.80616 13.8896 9.72468 13.9332C9.6432 13.9768 9.56238 14 9.3395 14H6.62144C6.39856 14 6.31774 13.9768 6.23626 13.9332C6.15478 13.8896 6.09083 13.8257 6.04725 13.7442C6.00367 13.6627 5.98047 13.5819 5.98047 13.359V10.641C5.98047 10.4181 6.00367 10.3373 6.04725 10.2558C6.09083 10.1743 6.15478 10.1104 6.23626 10.0668C6.31774 10.0232 6.39856 10 6.62144 10H9.3395ZM14.3395 10C14.5624 10 14.6432 10.0232 14.7247 10.0668C14.8062 10.1104 14.8701 10.1743 14.9137 10.2558C14.9573 10.3373 14.9805 10.4181 14.9805 10.641V13.359C14.9805 13.5819 14.9573 13.6627 14.9137 13.7442C14.8701 13.8257 14.8062 13.8896 14.7247 13.9332C14.6432 13.9768 14.5624 14 14.3395 14H11.6214C11.3986 14 11.3177 13.9768 11.2363 13.9332C11.1548 13.8896 11.0908 13.8257 11.0473 13.7442C11.0037 13.6627 10.9805 13.5819 10.9805 13.359V10.641C10.9805 10.4181 11.0037 10.3373 11.0473 10.2558C11.0908 10.1743 11.1548 10.1104 11.2363 10.0668C11.3177 10.0232 11.3986 10 11.6214 10H14.3395ZM4.3395 5C4.56238 5 4.6432 5.02321 4.72468 5.06678C4.80616 5.11036 4.87011 5.17431 4.91369 5.25579C4.95726 5.33727 4.98047 5.41809 4.98047 5.64097V8.35903C4.98047 8.58191 4.95726 8.66273 4.91369 8.74421C4.87011 8.82569 4.80616 8.88964 4.72468 8.93322C4.6432 8.97679 4.56238 9 4.3395 9H1.62144C1.39856 9 1.31774 8.97679 1.23626 8.93322C1.15478 8.88964 1.09083 8.82569 1.04725 8.74421C1.00368 8.66273 0.980469 8.58191 0.980469 8.35903V5.64097C0.980469 5.41809 1.00368 5.33727 1.04725 5.25579C1.09083 5.17431 1.15478 5.11036 1.23626 5.06678C1.31774 5.02321 1.39856 5 1.62144 5H4.3395ZM9.3395 5C9.56238 5 9.6432 5.02321 9.72468 5.06678C9.80616 5.11036 9.87011 5.17431 9.91369 5.25579C9.95726 5.33727 9.98047 5.41809 9.98047 5.64097V8.35903C9.98047 8.58191 9.95726 8.66273 9.91369 8.74421C9.87011 8.82569 9.80616 8.88964 9.72468 8.93322C9.6432 8.97679 9.56238 9 9.3395 9H6.62144C6.39856 9 6.31774 8.97679 6.23626 8.93322C6.15478 8.88964 6.09083 8.82569 6.04725 8.74421C6.00367 8.66273 5.98047 8.58191 5.98047 8.35903V5.64097C5.98047 5.41809 6.00367 5.33727 6.04725 5.25579C6.09083 5.17431 6.15478 5.11036 6.23626 5.06678C6.31774 5.02321 6.39856 5 6.62144 5H9.3395ZM14.3395 5C14.5624 5 14.6432 5.02321 14.7247 5.06678C14.8062 5.11036 14.8701 5.17431 14.9137 5.25579C14.9573 5.33727 14.9805 5.41809 14.9805 5.64097V8.35903C14.9805 8.58191 14.9573 8.66273 14.9137 8.74421C14.8701 8.82569 14.8062 8.88964 14.7247 8.93322C14.6432 8.97679 14.5624 9 14.3395 9H11.6214C11.3986 9 11.3177 8.97679 11.2363 8.93322C11.1548 8.88964 11.0908 8.82569 11.0473 8.74421C11.0037 8.66273 10.9805 8.58191 10.9805 8.35903V5.64097C10.9805 5.41809 11.0037 5.33727 11.0473 5.25579C11.0908 5.17431 11.1548 5.11036 11.2363 5.06678C11.3177 5.02321 11.3986 5 11.6214 5H14.3395ZM4.3395 0C4.56238 0 4.6432 0.0232064 4.72468 0.0667832C4.80616 0.11036 4.87011 0.174307 4.91369 0.255789C4.95726 0.33727 4.98047 0.418092 4.98047 0.640971V3.35903C4.98047 3.58191 4.95726 3.66273 4.91369 3.74421C4.87011 3.82569 4.80616 3.88964 4.72468 3.93322C4.6432 3.97679 4.56238 4 4.3395 4H1.62144C1.39856 4 1.31774 3.97679 1.23626 3.93322C1.15478 3.88964 1.09083 3.82569 1.04725 3.74421C1.00368 3.66273 0.980469 3.58191 0.980469 3.35903V0.640971C0.980469 0.418092 1.00368 0.33727 1.04725 0.255789C1.09083 0.174307 1.15478 0.11036 1.23626 0.0667832C1.31774 0.0232064 1.39856 0 1.62144 0H4.3395ZM9.3395 0C9.56238 0 9.6432 0.0232064 9.72468 0.0667832C9.80616 0.11036 9.87011 0.174307 9.91369 0.255789C9.95726 0.33727 9.98047 0.418092 9.98047 0.640971V3.35903C9.98047 3.58191 9.95726 3.66273 9.91369 3.74421C9.87011 3.82569 9.80616 3.88964 9.72468 3.93322C9.6432 3.97679 9.56238 4 9.3395 4H6.62144C6.39856 4 6.31774 3.97679 6.23626 3.93322C6.15478 3.88964 6.09083 3.82569 6.04725 3.74421C6.00367 3.66273 5.98047 3.58191 5.98047 3.35903V0.640971C5.98047 0.418092 6.00367 0.33727 6.04725 0.255789C6.09083 0.174307 6.15478 0.11036 6.23626 0.0667832C6.31774 0.0232064 6.39856 0 6.62144 0H9.3395ZM14.3395 0C14.5624 0 14.6432 0.0232064 14.7247 0.0667832C14.8062 0.11036 14.8701 0.174307 14.9137 0.255789C14.9573 0.33727 14.9805 0.418092 14.9805 0.640971V3.35903C14.9805 3.58191 14.9573 3.66273 14.9137 3.74421C14.8701 3.82569 14.8062 3.88964 14.7247 3.93322C14.6432 3.97679 14.5624 4 14.3395 4H11.6214C11.3986 4 11.3177 3.97679 11.2363 3.93322C11.1548 3.88964 11.0908 3.82569 11.0473 3.74421C11.0037 3.66273 10.9805 3.58191 10.9805 3.35903V0.640971C10.9805 0.418092 11.0037 0.33727 11.0473 0.255789C11.0908 0.174307 11.1548 0.11036 11.2363 0.0667832C11.3177 0.0232064 11.3986 0 11.6214 0H14.3395Z"
          />
        </svg>
        <p className="text-unactive">ALL GAMES</p>
      </div>
      <div
        onClick={() => setActiveTab(3)}
        className={activeTab === 3 ? "tab-container-active" : "tab-container"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7678 11.768C13.9157 9.62011 13.9157 6.1377 11.7678 3.98982C9.61996 1.84194 6.13756 1.84194 3.98967 3.98982C1.84179 6.1377 1.84179 9.62011 3.98967 11.768C6.13756 13.9159 9.61996 13.9159 11.7678 11.768Z"
            stroke={activeTab === 3 ? "black" : "#cccccc"}
            strokeWidth="3"
          />
          <path
            d="M13.5355 11.4144C12.9497 10.8287 12 10.8287 11.4142 11.4144C10.8284 12.0002 10.8284 12.95 11.4142 13.5358L14.9497 17.0713C15.5355 17.6571 16.4852 17.6571 17.071 17.0713C17.6568 16.4855 17.6568 15.5358 17.071 14.95L13.5355 11.4144Z"
            stroke={activeTab === 3 ? "black" : "#cccccc"}
          />
        </svg>

        <p className="text-unactive">SEARCH</p>
      </div>
      <div
        onClick={() => setActiveTab(4)}
        className={`${
          activeTab === 4 ? "tab-container-active" : "tab-container"
        } border-l`}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.56763 0.287109H13.3926C13.8344 0.287109 14.1926 0.645282 14.1926 1.08711C14.1926 1.25849 14.1375 1.42534 14.0356 1.56309L9.21086 8.08076V12.0604L5.74932 14.2871V8.08076L0.924632 1.56309C0.661757 1.20797 0.736534 0.706987 1.09165 0.444112C1.2294 0.342146 1.39625 0.287109 1.56763 0.287109Z"
          />
        </svg>
        <p className="text-unactive">FILTER</p>
      </div>
    </div>
  );
};
export default Tabs;
