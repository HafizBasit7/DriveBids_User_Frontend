import React, { useState } from "react";
import { ArrowDownward, ArrowUpward, Check } from "@mui/icons-material";

export default function SortByDropdown({ sortBy, setsortBy }) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    {type: 'recent', label: 'Newly listed'},
    {type: 'relevant', label: 'Most relevant'},
    {type: 'lowPrice', label: 'Lowest price'},
    {type: 'highPrice', label: 'Highest price'},
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setsortBy(option);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        fontFamily: "sans-serif",
        // padding: 6,
      }}
    >
      {/* Dropdown header */}
      <div
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 15px",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{ fontWeight: "600", color: "#003057", marginRight: "8px" }}
          >
            SORT BY:
          </span>
          <span>{sortOptions.find(option => option.type === sortBy)?.label || ''}</span>
        </div>
        {isOpen ? (
          <ArrowUpward fontSize={"18px"} color="#003057" />
        ) : (
          <ArrowDownward fontSize={"18px"} color="#003057" />
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "white",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            marginTop: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
          }}
        >
          {sortOptions.map((option) => (
            <div
              key={option.type}
              onClick={() => selectOption(option.type)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                cursor: "pointer",
                borderBottom:
                  option.type !== sortOptions[sortOptions.length - 1].type
                    ? "1px solid #f0f0f0"
                    : "none",
                color: option.type === sortBy ? "#003057" : "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f5f5f5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <div style={{ width: "24px", marginRight: "8px" }}>
                {option.type === sortBy && (
                  <Check fontSize={"18px"} color="#003057" />
                )}
              </div>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
