"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const GDPRCookie = ({ settings }) => {
  const defaultSettings = {
    cookieName: "userCookiePrefs",
    expires: 90, // Default expiration: 90 days
    cookieTypes: [
      { type: "Essential", value: "essential", description: "Necessary for site functionality", checked: true },
      { type: "Preferences", value: "preferences", description: "Saves your site preferences", checked: true },
      { type: "Analytics", value: "analytics", description: "Helps us improve site usage", checked: false },
      { type: "Marketing", value: "marketing", description: "Personalized advertising", checked: false },
    ],
    title: "Accept Cookies & privacy",
    message: "This site uses cookies to improve your experience. You can customize your preferences.",
    acceptBtnLabel: "Accept All Cookies",
    advancedBtnLabel: "Manage Preferences",
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  const [showBanner, setShowBanner] = useState(true);
  const [isAdvanced, setIsAdvanced] = useState(true);
  const [cookiePreferences, setCookiePreferences] = useState({});

  useEffect(() => {
    const savedPreferences = Cookies.get(mergedSettings.cookieName);
    if (!savedPreferences) {
      setShowBanner(true);
    } else {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleAcceptAll = () => {
    const acceptedPreferences = mergedSettings.cookieTypes.reduce((acc, cookie) => {
      acc[cookie.value] = true;
      return acc;
    }, {});

    Cookies.set(mergedSettings.cookieName, JSON.stringify(acceptedPreferences), {
      expires: mergedSettings.expires,
    });

    setShowBanner(false);
  };

  const handleCustomize = () => {
    setIsAdvanced(!isAdvanced);
  };

  const handlePreferenceChange = (type) => {
    setCookiePreferences((prev) => {
      const updatedPreferences = { ...prev, [type]: !prev[type] };
      Cookies.set(mergedSettings.cookieName, JSON.stringify(updatedPreferences), {
        expires: mergedSettings.expires,
      });
      return updatedPreferences;
    });
  };

  if (!showBanner) return null;

  return (
    <div className="gdpr-cookie-banner">
      <h2>{mergedSettings.title}</h2>
      <p>{mergedSettings.message}</p>

      {isAdvanced && (
        <div>
          {mergedSettings.cookieTypes.map((cookie) => (
            <label key={cookie.value}>
              <input
                type="checkbox"
                checked={cookiePreferences[cookie.value] ?? cookie.checked}
                disabled={cookie.value === "essential"}
                onChange={() => handlePreferenceChange(cookie.value)}
              />
              {cookie.type}
            </label>
          ))}
        </div>
      )}

      <button onClick={handleAcceptAll}>{mergedSettings.acceptBtnLabel}</button>
      <button onClick={handleCustomize}>{mergedSettings.advancedBtnLabel}</button>
    </div>
  );
};

export default GDPRCookie;
