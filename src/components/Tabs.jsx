import React from "react";
import styled from "styled-components";

export default function Tabs({ tabs, activeTab, onChange }) {
  const activeIndex = tabs.findIndex(x => x.id === activeTab);
  
  return (
    <StyledWrapper>
      <div className="tab-container">
        {tabs.map((t, index) => (
          <React.Fragment key={t.id}>
            <input
              type="radio"
              name="tab"
              id={t.id}
              className={`tab tab--${index + 1}`}
              checked={activeTab === t.id}
              onChange={() => onChange(t.id)}
            />
            <label className="tab_label" htmlFor={t.id}>
            
              {t.label}
            </label>
          </React.Fragment>
        ))}
        <div 
          className="indicator" 
          style={{ 
            left: `calc(${activeIndex * (100 / tabs.length)}% + 2px)`,
            width: `calc(${100 / tabs.length}% - 4px)`
          }} 
        />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tab-container {
    position: relative;
    display: flex;
    padding: 2px;
    background-color: #f1f1f3;
    border-radius: 12px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .indicator {
    height: 36px;
    background: #ffffff;
    position: absolute;
    top: 2px;
    z-index: 9;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 1px 2px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .tab {
    flex: 1;
    height: 36px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    
    &:checked + .tab_label {
      color: #1a1a1a;
      opacity: 1;
      font-weight: 500;
    }
  }

  .tab_label {
    flex: 1;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 99;
    cursor: pointer;
    opacity: 0.7;
    color: #4a5568;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.2s ease;
    border-radius: 10px;
    margin: 0 1px;
    
    &:hover {
      opacity: 0.9;
      background: rgba(255, 255, 255, 0.3);
    }

    .icon {
      margin-right: 8px;
      display: flex;
      align-items: center;
      font-size: 16px;
    }

    .badge {
      margin-left: 8px;
      background: #e53e3e;
      color: white;
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 10px;
      font-weight: 500;
    }
  }

  /* Optional: Different color themes */
  &.primary {
    .tab-container {
      background-color: #e8f4ff;
    }
    
    .indicator {
      background: #3b82f6;
      color: white;
    }
    
    .tab:checked + .tab_label {
      color: #3b82f6;
    }
  }

  &.dark {
    .tab-container {
      background-color: #2d3748;
    }
    
    .indicator {
      background: #4a5568;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .tab_label {
      color: #cbd5e0;
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
    
    .tab:checked + .tab_label {
      color: white;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .tab_label {
      font-size: 13px;
      padding: 0 8px;
      
      .icon {
        margin-right: 4px;
        font-size: 14px;
      }
      
      .badge {
        margin-left: 4px;
        font-size: 10px;
        padding: 1px 4px;
      }
    }
  }
`;