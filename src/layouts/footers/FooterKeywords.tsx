"use client"

import type { CSSProperties } from "react";

const frenchVisibleKeywords = [
  "Agence immobilière à Dubai",
  "Immobilier de luxe Dubai",
  "Villas de prestige Dubai",
  "Penthouse Dubai",
  "Investir à Dubai",
  "Maisons haut de gamme",
  "Résidences premium Dubai",
  "Propriétés exclusives",
  "Palm Jumeirah immobilier",
  "Dubai Marina immobilier",
  "Appartements de luxe Dubai",
  "Investissement immobilier",
  "Immobilier expatriés",
  "Maisons modernes Dubai",
  "Propriétés bord de mer",
  "Immobilier international",
  "Gestion immobilière Dubai",
  "Résidence sécurisée Dubai",
  "Achat propriété Dubai",
  "Dubai Hills Estate",
];

const englishVisibleKeywords = [
  "Dubai real estate agency",
  "Dubai luxury real estate",
  "Luxury villas Dubai",
  "Dubai penthouses",
  "Invest in Dubai",
  "High-end properties",
  "Premium residences Dubai",
  "Exclusive properties",
  "Palm Jumeirah real estate",
  "Dubai Marina properties",
  "Luxury apartments Dubai",
  "Property investment",
  "Expat real estate Dubai",
  "Modern homes Dubai",
  "Waterfront properties",
  "International real estate",
  "Property management Dubai",
  "Secure residences Dubai",
  "Buy property in Dubai",
  "Dubai Hills Estate",
];

const FooterKeywords = () => {
  const wrapperStyle: CSSProperties = {
    marginTop: "18px",
    paddingTop: "14px",
    borderTop: "1px solid rgba(15, 23, 42, 0.08)",
  };

  const listStyle: CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "8px 12px",
  };

  const itemStyle: CSSProperties = {
    color: "#374151",
    fontSize: "13px",
    letterSpacing: "0.01em",
    lineHeight: 1.5,
    fontWeight: 500,
    backgroundColor: "transparent",
    padding: "0",
  };

  const sectionStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "12px 18px",
    width: "100%",
  };

  return (
    <div className="footer-keywords" style={wrapperStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "6px" }}>
        <h5 style={{ margin: 0, fontWeight: 600, letterSpacing: "0.01em", color: "#0f172a", fontSize: "15px" }}>Dubai Real Estate Keywords</h5>
        <span style={{ fontSize: "12px", color: "#6b7280" }}>Discrets mais lisibles (FR / EN)</span>
      </div>
      <div style={sectionStyle}>
        <div>
          <h6 style={{ margin: "0 0 6px", color: "#111827", fontSize: "13px", fontWeight: 600 }}>🇫🇷 Français</h6>
          <ul style={listStyle}>
            {frenchVisibleKeywords.map((keyword) => (
              <li key={keyword} style={itemStyle}>{keyword}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 style={{ margin: "0 0 6px", color: "#111827", fontSize: "13px", fontWeight: 600 }}>🇬🇧 English</h6>
          <ul style={listStyle}>
            {englishVisibleKeywords.map((keyword) => (
              <li key={keyword} style={itemStyle}>{keyword}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterKeywords;
