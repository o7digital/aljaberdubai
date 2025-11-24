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

const listStyle: CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const pillStyle: CSSProperties = {
  display: "inline-flex",
  padding: "8px 12px",
  backgroundColor: "#0f172a",
  color: "#fff",
  borderRadius: "10px",
  fontSize: "14px",
  letterSpacing: "0.01em",
};

const sectionStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "16px",
  width: "100%",
};

const FooterKeywords = () => {
  return (
    <div
      className="footer-keywords"
      style={{
        marginTop: "48px",
        padding: "28px",
        borderRadius: "18px",
        background: "linear-gradient(135deg, #f7f9fc 0%, #eef2f7 100%)",
        border: "1px solid #d9e2ec",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
        <h4 style={{ margin: 0, fontWeight: 700, letterSpacing: "0.02em", color: "#0f172a" }}>Dubai Real Estate Keywords</h4>
        <span style={{ fontSize: "14px", color: "#1f2937", opacity: 0.8 }}>Visible & intentional for authority</span>
      </div>
      <div style={sectionStyle}>
        <div>
          <h5 style={{ margin: "0 0 10px", color: "#0f172a" }}>🇫🇷 Français</h5>
          <ul style={listStyle}>
            {frenchVisibleKeywords.map((keyword) => (
              <li key={keyword} style={pillStyle}>{keyword}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 style={{ margin: "0 0 10px", color: "#0f172a" }}>🇬🇧 English</h5>
          <ul style={listStyle}>
            {englishVisibleKeywords.map((keyword) => (
              <li key={keyword} style={pillStyle}>{keyword}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterKeywords;
