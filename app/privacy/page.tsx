import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — RingCatch',
  description: 'How Coastline Automation Ltd (trading as RingCatch) collects, uses, and protects personal data.',
}

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="legal-content">
        <Link href="/" className="legal-back">&larr; Back to home</Link>

        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: March 2026</p>

        <h2>1. Who we are</h2>
        <p>This privacy policy explains how Coastline Automation Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), trading as RingCatch, collects, uses, stores, and protects personal data.</p>
        <p>Coastline Automation Ltd is a company registered in England and Wales.</p>
        <ul>
          <li>Company number: [COMPANY_NUMBER]</li>
          <li>Registered office: [REGISTERED_ADDRESS]</li>
          <li>Contact email: <a href="mailto:richard@coastlineautomation.co.uk">richard@coastlineautomation.co.uk</a></li>
          <li>ICO registration number: [ICO_NUMBER]</li>
        </ul>
        <p>We operate the website ringcatch.ai and provide a managed AI phone receptionist service (&ldquo;RingCatch&rdquo;) to trade businesses across the United Kingdom.</p>

        <h2>2. Who this policy applies to</h2>
        <p>This policy covers two groups of people:</p>
        <p><strong>Website visitors:</strong> People who visit ringcatch.ai, book consultations via our scheduling tool, or contact us by email.</p>
        <p><strong>Callers:</strong> People who call a phone number answered by a RingCatch AI agent on behalf of one of our client businesses. If you have called a business that uses RingCatch, this section explains how your data is handled.</p>
        <p>If you are a caller to a business that uses RingCatch, that business is the &ldquo;Data Controller&rdquo; for your personal data &mdash; they determine why your data is collected (to receive your business enquiry). Coastline Automation Ltd acts as the &ldquo;Data Processor&rdquo; &mdash; we process your data on behalf of that business in order to deliver the RingCatch service to them.</p>

        <h2>3. What personal data we collect</h2>
        <h3>From website visitors:</h3>
        <ul>
          <li>Name, email address, and phone number (when you book a consultation or contact us directly)</li>
          <li>Technical data including IP address, browser type, device information, and pages visited (collected via cookies &mdash; see our <Link href="/cookies">Cookie Policy</Link>)</li>
          <li>Any additional information you voluntarily provide to us by email or during a consultation call</li>
        </ul>

        <h3>From callers to RingCatch agents:</h3>
        <ul>
          <li>Your phone number (captured automatically when you call)</li>
          <li>Your name (if provided during the conversation)</li>
          <li>Details of the service you need, including job type, location, and urgency (provided during the conversation)</li>
          <li>A recording of the call (audio)</li>
          <li>A transcript of the call (text, generated from the audio)</li>
          <li>Call metadata, including the date, time, and duration of the call</li>
          <li>Structured lead data extracted from the conversation (a summary of your name, requirements, location, and urgency)</li>
        </ul>
        <p>We do not intentionally collect special category data (such as health information, religious beliefs, or ethnic origin). However, callers may occasionally disclose such information during a conversation. Where this happens, the data is captured in the call recording but is not specifically extracted or processed.</p>

        <h2>4. How we use your data</h2>
        <h3>Website visitor data is used to:</h3>
        <ul>
          <li>Respond to your enquiry or consultation booking</li>
          <li>Provide you with information about RingCatch services</li>
          <li>Improve our website and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h3>Caller data is used to:</h3>
        <ul>
          <li>Deliver a structured summary of your enquiry to the business you called, via SMS and email, so they can follow up with you</li>
          <li>Attempt to call you back if your original call was not answered (one automated callback attempt only, in compliance with UK regulations)</li>
          <li>Monitor and improve the quality and accuracy of the AI agent</li>
          <li>Provide monthly performance summaries to the client business (in aggregate &mdash; individual caller details are not shared in summaries)</li>
          <li>Resolve disputes or investigate complaints about the service</li>
        </ul>

        <p><strong>We do not:</strong></p>
        <ul>
          <li>Use your data to send you marketing communications</li>
          <li>Sell your data to third parties</li>
          <li>Use call recordings or transcripts to train third-party AI models</li>
          <li>Make automated decisions that produce legal or similarly significant effects on you</li>
        </ul>

        <h2>5. Lawful basis for processing</h2>
        <p>Under the UK General Data Protection Regulation (UK GDPR), we must have a lawful basis for processing your personal data. The bases we rely on are:</p>
        <p><strong>Consent:</strong> When you book a consultation or submit your contact details through our website, you consent to us processing that data to respond to your enquiry.</p>
        <p><strong>Contract performance:</strong> When a caller contacts a business that uses RingCatch, we process the caller&apos;s data as necessary for the performance of the contract between Coastline Automation and the client business &mdash; specifically, to capture and deliver the lead information that the service is designed to provide.</p>
        <p><strong>Legitimate interest:</strong> We process call recordings and transcripts for quality assurance, service improvement, and dispute resolution. We have carried out a balancing test and determined that these interests do not override the rights and freedoms of the callers, given that callers are informed at the start of the call that it may be recorded, the recordings are retained for a limited period, and access is restricted. For clients on our Pro tier, call transcripts are reviewed by a human to identify improvements to the AI agent &mdash; callers are informed of this at the start of the call.</p>

        <h2>6. Call recording and AI transparency</h2>
        <p>RingCatch uses artificial intelligence (AI) voice technology to answer phone calls on behalf of our client businesses. When you call a number answered by RingCatch:</p>
        <ul>
          <li>The AI agent will identify itself as an AI assistant at the start of the call</li>
          <li>The call may be recorded for quality assurance and service improvement purposes</li>
          <li>The AI will engage you in a natural conversation to understand your requirements</li>
          <li>Information you provide is extracted and sent to the business you called</li>
        </ul>
        <p>The AI does not make decisions that have legal or significantly impactful effects on you. It captures your enquiry and delivers it to the business &mdash; the business decides how to respond.</p>
        <p>Call recordings may be reviewed by a human (the RingCatch service manager) for the purpose of improving the AI agent&apos;s accuracy and conversation quality. This review is carried out under our legitimate interest basis and is subject to the same retention limits and access controls as all other call data.</p>

        <h2>7. Who we share your data with</h2>
        <p>We share personal data with the following parties:</p>

        <h3>Our client businesses</h3>
        <p>If you call a number answered by RingCatch, a structured summary of your enquiry (name, requirements, location, urgency) is delivered to the business you called via SMS and email. The call recording and transcript are available to us (Coastline Automation) for quality assurance but are not routinely shared with the client business unless specifically requested and agreed.</p>

        <h3>Our service providers</h3>
        <p>We use the following third-party service providers to deliver the RingCatch service:</p>
        <div className="legal-table-wrapper">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Service provider</th>
                <th>What they do</th>
                <th>Where they are based</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Retell AI</td>
                <td>Powers the AI voice agent, stores call recordings and transcripts</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Twilio</td>
                <td>Provides the telephone number and call routing, delivers SMS messages</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Google (Workspace and Sheets)</td>
                <td>Hosts email delivery and call log data</td>
                <td>United States and European Union</td>
              </tr>
              <tr>
                <td>n8n</td>
                <td>Automates the workflow between the AI agent and the delivery of lead data</td>
                <td>European Union</td>
              </tr>
              <tr>
                <td>Calendly</td>
                <td>Manages consultation bookings for website visitors</td>
                <td>United States</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>We do not share your data with any other third parties, and we do not sell your data.</p>

        <h2>8. International data transfers</h2>
        <p>Some of our service providers are based in the United States. When your data is transferred outside the United Kingdom, we ensure that appropriate safeguards are in place in accordance with UK GDPR. These safeguards include:</p>
        <ul>
          <li>UK International Data Transfer Agreements (IDTAs) with our US-based service providers</li>
          <li>Standard Contractual Clauses (SCCs) where applicable</li>
          <li>Reliance on the service provider&apos;s own data protection certifications and compliance frameworks (such as SOC 2 and ISO 27001)</li>
        </ul>
        <p>If you would like more information about the specific safeguards in place for any transfer, please contact us at <a href="mailto:richard@coastlineautomation.co.uk">richard@coastlineautomation.co.uk</a>.</p>

        <h2>9. How long we keep your data</h2>
        <p>We retain personal data only for as long as necessary for the purposes described in this policy.</p>
        <div className="legal-table-wrapper">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Data type</th>
                <th>Retention period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Call recordings (audio)</td>
                <td>90 days from the date of the call, then automatically deleted</td>
              </tr>
              <tr>
                <td>Call transcripts (text)</td>
                <td>90 days from the date of the call, then automatically deleted</td>
              </tr>
              <tr>
                <td>Structured lead data (name, requirements, location)</td>
                <td>12 months, then anonymised or deleted</td>
              </tr>
              <tr>
                <td>Call metadata (date, time, duration)</td>
                <td>12 months, then deleted</td>
              </tr>
              <tr>
                <td>Website visitor data (consultation bookings, contact form submissions)</td>
                <td>For the duration of the business relationship or enquiry, then deleted within 6 months</td>
              </tr>
              <tr>
                <td>Client business data (account information, billing)</td>
                <td>For the duration of the client relationship plus 6 years (to meet UK legal and accounting requirements)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>10. How we protect your data</h2>
        <p>We take the security of personal data seriously and have implemented appropriate technical and organisational measures, including:</p>
        <ul>
          <li>All data is encrypted in transit using TLS/HTTPS</li>
          <li>Access to call recordings, transcripts, and lead data is restricted to authorised personnel only</li>
          <li>Our service providers maintain their own security certifications and standards (Twilio: SOC 2, ISO 27001; Google: SOC 2, ISO 27001)</li>
          <li>We do not store call recordings or transcripts on our own servers &mdash; these are hosted by Retell AI under their security framework</li>
          <li>Structured lead data stored in Google Sheets is protected by Google Workspace security controls including two-factor authentication</li>
        </ul>
        <p>In the event of a personal data breach, we will notify the relevant client (Data Controller) without undue delay and within 24 hours of becoming aware of the breach. The client is responsible for notifying the Information Commissioner&apos;s Office (ICO) within 72 hours if required under UK GDPR.</p>

        <h2>11. Your rights</h2>
        <p>Under UK GDPR, you have the following rights in relation to your personal data:</p>
        <p><strong>Right of access:</strong> You can request a copy of the personal data we hold about you.</p>
        <p><strong>Right to rectification:</strong> You can ask us to correct inaccurate or incomplete personal data.</p>
        <p><strong>Right to erasure:</strong> You can ask us to delete your personal data in certain circumstances (for example, if the data is no longer necessary for the purpose it was collected).</p>
        <p><strong>Right to restrict processing:</strong> You can ask us to temporarily limit how we use your data while a concern is being resolved.</p>
        <p><strong>Right to data portability:</strong> You can request that we provide your data in a structured, commonly used, machine-readable format.</p>
        <p><strong>Right to object:</strong> You can object to our processing of your data where we rely on legitimate interest as our lawful basis. We will stop processing unless we can demonstrate compelling legitimate grounds that override your interests.</p>
        <p><strong>Right to withdraw consent:</strong> Where we process your data based on consent, you can withdraw that consent at any time.</p>
        <p><strong>Right to lodge a complaint:</strong> You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe your data has been handled unlawfully.</p>
        <ul>
          <li>ICO website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
          <li>ICO helpline: 0303 123 1113</li>
        </ul>
        <p>To exercise any of these rights, please contact us at <a href="mailto:richard@coastlineautomation.co.uk">richard@coastlineautomation.co.uk</a>. We will respond to your request within 30 days.</p>
        <p><strong>If you are a caller to a business that uses RingCatch:</strong> Because the business you called is the Data Controller, we recommend contacting that business directly in the first instance. If you contact us, we will work with the relevant business to fulfil your request.</p>

        <h2>12. Cookies</h2>
        <p>Our website uses cookies. For full details on the cookies we use and how to manage your preferences, please see our <Link href="/cookies">Cookie Policy</Link>.</p>

        <h2>13. Children&apos;s data</h2>
        <p>Our services are not directed at children under the age of 16. We do not knowingly collect personal data from children. If a caller is under 16, their data will be handled in accordance with this policy and deleted upon request.</p>

        <h2>14. Changes to this policy</h2>
        <p>We may update this privacy policy from time to time to reflect changes in our services, legal requirements, or data processing practices. When we make significant changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.</p>

        <h2>15. Contact us</h2>
        <p>If you have any questions about this privacy policy or how we handle your personal data, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:richard@coastlineautomation.co.uk">richard@coastlineautomation.co.uk</a></li>
          <li>Post: Coastline Automation Ltd, [REGISTERED_ADDRESS]</li>
        </ul>
      </div>
    </section>
  )
}
