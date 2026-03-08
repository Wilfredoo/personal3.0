import React from "react";

const pageStyle = {
  maxWidth: "880px",
  margin: "0 auto",
  padding: "48px 20px 64px",
  lineHeight: 1.65,
  color: "#1f2937",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const h1Style = {
  fontSize: "2rem",
  marginBottom: "0.5rem",
};

const sectionTitleStyle = {
  marginTop: "1.75rem",
  marginBottom: "0.5rem",
  fontSize: "1.2rem",
};

function ReadShakespearePrivacyPolicy() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>Privacy Policy for Read Shakespeare</h1>
      <p>
        <strong>Effective date:</strong> March 9, 2026
      </p>
      <p>
        Read Shakespeare (&ldquo;the App&rdquo;) helps users read EPUB books and
        request AI explanations for selected text. This Privacy Policy explains
        what data is processed and how it is used.
      </p>

      <h2 style={sectionTitleStyle}>1. Data processed by the App</h2>
      <p>The App stores the following data locally on your device:</p>
      <ul>
        <li>Imported book file paths</li>
        <li>Reading position and progress</li>
        <li>Cached AI explanations for repeated requests</li>
        <li>Downloaded public-domain books added through the classics catalog</li>
      </ul>
      <p>
        When you use the AI Explain feature, the App sends the following data to
        the configured AI provider:
      </p>
      <ul>
        <li>Selected text you ask to explain</li>
        <li>
          Nearby reading context (such as book title, chapter title, and nearby
          passages) to improve explanation quality
        </li>
      </ul>

      <h2 style={sectionTitleStyle}>2. How data is used</h2>
      <p>Data is used to:</p>
      <ul>
        <li>Provide reading functionality</li>
        <li>Restore your library and reading progress</li>
        <li>Generate AI explanations for selected text</li>
        <li>Improve usability by caching repeated explanation results locally</li>
      </ul>

      <h2 style={sectionTitleStyle}>3. Third-party services</h2>
      <p>
        AI responses are generated through third-party AI APIs configured by the
        developer (for example OpenRouter and model providers). When AI features
        are used, text sent for explanation is processed under those providers&apos;
        terms and privacy policies.
      </p>

      <h2 style={sectionTitleStyle}>4. Data sharing</h2>
      <p>
        The App does not sell your personal data. Data is shared with third-party
        AI providers only when you actively use AI explanation features.
      </p>

      <h2 style={sectionTitleStyle}>5. User controls</h2>
      <p>You can:</p>
      <ul>
        <li>Remove books from your local library</li>
        <li>
          Stop sharing text with AI providers by not using the Explain feature
        </li>
        <li>Avoid submitting sensitive or personal information in selected text</li>
      </ul>

      <h2 style={sectionTitleStyle}>6. Data retention</h2>
      <p>
        Local app data remains on your device until removed by you or by
        uninstalling the App. Third-party AI providers may retain submitted
        content according to their own policies.
      </p>

      <h2 style={sectionTitleStyle}>7. Security</h2>
      <p>
        The App uses network encryption (HTTPS) for API communication where
        supported. No method of transmission or storage is guaranteed to be
        completely secure.
      </p>

      <h2 style={sectionTitleStyle}>8. Children&apos;s privacy</h2>
      <p>The App is not directed to children and is intended for general audiences.</p>

      <h2 style={sectionTitleStyle}>9. Changes to this policy</h2>
      <p>
        This Privacy Policy may be updated from time to time. Updates will be
        reflected by revising the effective date.
      </p>

      <h2 style={sectionTitleStyle}>10. Contact</h2>
      <p>If you have questions about this Privacy Policy, contact:</p>
      <p>
        inbox@wilfredocasas.com
        <br />
        Wilfredo Casas
      </p>
    </main>
  );
}

export default ReadShakespearePrivacyPolicy;
