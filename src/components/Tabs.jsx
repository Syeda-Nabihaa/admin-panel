import React from "react";
import styled from "styled-components";

export default function Tabs({ tabs, activeTab, onChange }) {
  const activeIndex = tabs.findIndex(x => x.id === activeTab);

  return (
    <StyledWrapper className="glass-tabs">
      <div className="tab-container">
        <div className="tab-bg-gradient"></div>
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
              <span className="icon">{t.icon}</span>
              <span className="label-text">{t.label}</span>
              {t.badge && <span className="badge">{t.badge}</span>}
              <div className="tab_highlight" />
            </label>
          </React.Fragment>
        ))}
        <div
          className="indicator"
          style={{
            left: `calc(${activeIndex * (100 / tabs.length)}% + 2px)`,
            width: `calc(${100 / tabs.length}% - 4px)`,
          }}
        />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  :root {
    --color-dark: #0D0D0F;
    --color-indigo: #1A0B2E;
  }

  &.glass-tabs {
    .tab-container {
      position: relative;
      display: flex;
      padding: 4px;
      background: linear-gradient(
        135deg,
        rgba(30, 41, 59, 0.9) 0%,
        rgba(15, 23, 42, 0.9) 100%
      );
      border-radius: 16px;
      box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.2),
        inset 0 -2px 4px rgba(255, 255, 255, 0.05),
        0 4px 20px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .tab-bg-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        transparent 0%,
        rgba(255, 255, 255, 0.15) 100%
      );
      border-radius: 16px;
      z-index: 1;
    }

    .indicator {
      height: 44px;
      background: linear-gradient(
        135deg,
        var(--color-dark) 0%,
        var(--color-indigo) 100%
      );
      position: absolute;
      top: 4px;
      z-index: 2;
      border-radius: 14px;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 
        0 6px 20px rgba(26, 11, 46, 0.45),
        0 2px 6px rgba(13, 13, 15, 0.4),
        inset 0 1px 1px rgba(255, 255, 255, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .indicator::after {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(
        135deg,
        rgba(26, 11, 46, 0.4) 0%,
        transparent 60%
      );
      border-radius: 16px;
      z-index: -1;
      filter: blur(4px);
      opacity: 0.7;
    }

    .tab {
      flex: 1;
      height: 44px;
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 10;

      &:checked + .tab_label {
        color: #ffffff;
        opacity: 1;
        font-weight: 600;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

        .icon {
          transform: scale(1.1);
        }

        .tab_highlight {
          opacity: 0.2;
        }
      }
    }

    .tab_label {
      flex: 1;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 3;
      cursor: pointer;
      opacity: 0.8;
      color: #94a3b8;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.3s ease;
      border-radius: 14px;
      margin: 0 1px;
      padding: 0 20px;

      &:hover {
        opacity: 1;
        background: rgba(255, 255, 255, 0.05);
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }

      .icon {
        margin-right: 10px;
        display: flex;
        align-items: center;
        font-size: 18px;
        transition: transform 0.3s ease;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
      }

      .label-text {
        position: relative;
        z-index: 1;
      }

      .badge {
        margin-left: 10px;
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        color: white;
        font-size: 11px;
        padding: 3px 8px;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .tab_highlight {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        background: radial-gradient(
          circle at center,
          rgba(255, 255, 255, 0.4) 0%,
          transparent 70%
        );
        border-radius: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
    }

    /* Outer glow effect for tabs */
    &::after {
      content: '';
      position: absolute;
      inset: -1px;
      background: linear-gradient(
        135deg,
        rgba(26, 11, 46, 0.15) 0%,
        transparent 30%,
        transparent 70%,
        rgba(13, 13, 15, 0.15) 100%
      );
      border-radius: 17px;
      z-index: 0;
      pointer-events: none;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    &.glass-tabs {
      .tab_label {
        font-size: 14px;
        padding: 0 16px;

        .icon {
          margin-right: 8px;
          font-size: 16px;
        }

        .badge {
          margin-left: 6px;
          font-size: 10px;
          padding: 2px 6px;
        }
      }

      .indicator {
        height: 40px;
      }

      .tab_label {
        height: 40px;
      }
    }
  }

  @media (max-width: 480px) {
    &.glass-tabs {
      .tab_label {
        font-size: 13px;
        padding: 0 12px;

        .icon {
          margin-right: 6px;
          font-size: 14px;
        }

        .badge {
          display: none;
        }
      }
    }
  }
`;
