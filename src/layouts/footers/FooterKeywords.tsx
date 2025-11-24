"use client"

import type { CSSProperties } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

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
  const { locale } = useTranslation();
  const isFrench = locale === "fr";
  const visibleKeywords = isFrench ? frenchVisibleKeywords : englishVisibleKeywords;

  const wrapperStyle: CSSProperties = {
    marginTop: "14px",
    paddingTop: "10px",
    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    color: "#777",
    fontSize: "11px",
    lineHeight: 1.6,
    fontWeight: 500,
  };

  const textStyle: CSSProperties = {
    margin: 0,
    display: "block",
  };

  return (
    <div className="footer-keywords" style={wrapperStyle} aria-label={isFrench ? "Mots-clés immobiliers" : "Real estate keywords"}>
      <span style={textStyle}>{visibleKeywords.join(" • ")}</span>
    </div>
  );
};

export default FooterKeywords;
