import React, { useState } from "react";
import "./style.css";
// Accordion Item Component
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="AdChoicesS2-Accordion-Item"
      style={{
        width: "70vw",
        margin: "auto",
        borderBottom: "1px solid #000",
        padding: "20px",
        paddingBottom: isOpen ? "20px" : "unset",
      }}
    >
      <div
        onClick={toggleAccordion}
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#003da5",
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "600",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "30px",
          }}
        >
          {isOpen ? "-" : "+"}
        </p>
      </div>
      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            color: "#000",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// Main Component
const Section2 = () => {
  return (
    <div>
      <div>
        <div className="AdChoicesS2-Content1">
          <div className="AdChoicesS2-Content1-Title">
            <p className="AdChoicesS2-Content1-Title-PrivacyPolicy">
              Privacy Policy
            </p>
            <p className="AdChoicesS2-Content1-Title-UpdatedDate">
              Updated April 2, 2024
            </p>
          </div>
          <p className="AdChoicesS2-Content1-DownloadLink">
            Download a copy of this Privacy Policy (PDF)
          </p>
        </div>

        <div className="AdChoicesS2-Content1">
          <p className="AdChoicesS2-Content1-FAQ-Title">FAQ</p>
          <p className="AdChoicesS2-Content1-FAQ-Description">
            Commonly asked questions about how we collect, store and use your
            personal data, as defined in applicable laws.
          </p>
          <div className="AdChoicesS2-Content1-FAQ-Section">
            <p className="AdChoicesS2-Content1-FAQ-Question">
              Do we sell your personal data for monetary compensation?
            </p>
            <p className="AdChoicesS2-Content1-FAQ-Answer">No</p>
            <p className="AdChoicesS2-Content1-FAQ-Question">
              Do we disclose your personal data to third-party partners?
            </p>
            <p className="AdChoicesS2-Content1-FAQ-Answer">
              Yes, where we have a lawful basis to do so.
            </p>
            <p className="AdChoicesS2-Content1-FAQ-Question">
              Do we receive personal data from other companies you have given
              permission to?
            </p>
            <p className="AdChoicesS2-Content1-FAQ-Answer">Yes</p>
            <p className="AdChoicesS2-Content1-FAQ-Question">
              Do we use your personal data for better product recommendations
              and site experiences?
            </p>
            <p className="AdChoicesS2-Content1-FAQ-Answer">
              Yes, where we have a lawful basis to do so.
            </p>
            <p className="AdChoicesS2-Content1-FAQ-Question">
              Do we give you control of your personal data?
            </p>
            <p className="AdChoicesS2-Content1-FAQ-Answer">Yes</p>
          </div>
        </div>
      </div>
      <AccordionItem title="How You Control Your Personal Data">
        <p style={{ color: "#00A3E0", fontWeight: "bold" }}>
          You are in control of your personal data. You can exercise your rights
          and change your preferences anytime.
        </p>
        <AccordionItem title="Data Subject Rights Requests">
          <p>
            Depending on your location (the jurisdiction in which you are a
            resident), you may have different data subject rights available to
            you. These may include requests for access, erasure,
            rectification/correction, to opt out of receiving marketing emails
            or texts, object to our use of your email address or phone number
            for advertising, etc. To submit a Data Subject Rights requests for
            your jurisdiction, click
          </p>
          <p>
            You can also tell us to stop sending you email and text messages by
            following the opt-out instructions sent with these communications.
            Please be aware that we may need to keep certain information to
            honor your choices (e.g., if you tell us to stop sending marketing
            emails, we will need your email address on file so that our systems
            remember that you no longer wish to receive marketing communications
            to that email address).
          </p>
          <p>
            Also, there are some situations where we may be unable to grant your
            request (e.g., deleting transaction data where we have a legal
            obligation to keep it, or for fraud prevention, security, or to
            protect the privacy of others, or for the establishment, exercise,
            or defense of legal claims, among other things).
          </p>
        </AccordionItem>
        <AccordionItem title="Traditional Online Behavioral Advertising">
          <AccordionItem title="How You Control Your Personal Data">
            <p>
              Advertising Industry Opt-Outs
              <br />
              <br /> For the U.S., to exercise choice with respect to
              interest-based advertising, you can utilize the opt-out mechanism
              provided by the Digital Advertising Alliance (“DAA”) by clicking
              here (for browsers) or here (for app-based opt-outs).
              <br />
              <br /> The Network Advertising Initiative (“NAI”) has developed a
              tool that allows consumers to opt out of certain Interest-based
              Ads delivered by NAI members' ad networks. To learn more about
              opting out of such targeted advertising or to use the NAI tool,
              see http://www.networkadvertising.org/choices/.
              <br />
              <br /> For Europe, you may click here to learn more about the
              DAA-Europe’s opt-out program.
              <br />
              <br />
              For Canada, you may click here to learn more about the DAA
              Canada’s opt-out program.
              <br />
              <br /> To opt-out of Unified ID 2.0 globally click here.
              <br />
              <br /> Please be aware that, even if you opt-out of certain kinds
              of interest-based ads, you may continue to receive other ads.
              Further, opting out of one or more NAI or DAA members only means
              that those selected members should no longer under the DAA / NAI
              rules deliver certain targeted ads to you. This will affect
              services provided by the applicable DAA / NAI members but does not
              mean you will no longer receive any targeted content and/or ads
              from non-participating parties. Also, if your browsers are
              configured to reject cookies when you visit the opt-out page, or
              you subsequently erase your cookies, use a different Device or web
              browser(s), or use a non-browser-based method of access, your DAA
              / NAI browser-based opt-out may not, or may no longer, be
              effective. Mobile device opt-outs will not affect browser-based
              Interest-based ads even on the same device, and you must opt-out
              separately for each device. We are not responsible for the
              effectiveness of, or compliance with, any third party opt-out
              options or programs or the accuracy of their statements regarding
              their programs. <br />
              <br />
              You can also prevent or reduce getting interest-based ads on
              websites by declining cookies in your browser(s), or on mobile
              devices by declining the “access to data” requests that apps
              usually present when you install them or by adjusting the ad
              tracking settings on your device. <br />
              <br />
              Please note that you may also receive personalized ads based on
              your email address or phone number, if you have provided those to
              us for marketing purposes. To opt out of that usage, please
              contact us. <br />
              <br />
              You will still see “contextual” ads even if you opt out of
              interest-based ads. Even if we stop sending you interest-based
              ads, you will still get ads from our brands on your computer or
              mobile devices. These ads, however, are based on the context of
              the sites you visit and are called contextual ads. Unlike
              interest-based ads which are based on pages you visit on your
              mobile phone or computer viewing activities over time and across
              unrelated services, contextual ads are ads shown to you based on
              the context of the specific site you are visiting. For example,
              you still may see an ad for one of our baby care brands while
              looking at nursery products online because these sites
              traditionally have had mostly new or expecting parents as
              visitors. You should also know that we may still collect
              information from your computer or devices and use it for other
              purposes like evaluating how our websites work, for consumer
              research, or detecting fraud, pursuant to applicable laws.
            </p>
          </AccordionItem>
          <AccordionItem title="How You Can Control Cookies">
            <p>
              You can set your browser to refuse all cookies or to indicate when
              a cookie is being sent to your computer. However, this may prevent
              our sites or services from working properly. You can also set your
              browser to delete cookies every time you finish browsing.
              <br />
              <br /> When you opt-out of interest-based advertising, an opt-out
              cookie is sent to your browser that indicates that you no longer
              want to receive interest-based ads. Your opt-out cookie will be
              deleted if you decide to delete all cookies on your browser. This
              means that you will need to opt-out again on each browser where
              you have deleted cookies if you still do not want to receive
              interest-based ads.
              <br />
              <br /> In some markets and on some of our websites, we offer a
              cookie consent management platform which allows you to exercise
              choice with respect to certain categories of cookies. If this is
              available, this may appear as a cookie banner and/or as an icon
              that is visible on the applicable websites. We may also provide
              similar technology in mobile apps, which, if available, will be
              accessible through the applicable app’s settings menu.
            </p>
          </AccordionItem>
        </AccordionItem>
        <AccordionItem title="U.S. State Privacy Laws">
          <p>
            See our “U.S. State Privacy Notice “ below for information required
            by certain state privacy laws, and information regarding privacy
            rights under such laws.
          </p>
        </AccordionItem>
        <AccordionItem title="Additional Information for EEA, Switzerland, and UK Residents">
          <p>
            If you live in the EEA, Switzerland or the UK, or are physically in
            the EEA, Switzerland, or the UK, you may access the personal data we
            hold about you, request that inaccurate, outdated, or no longer
            necessary information be corrected, erased, or restricted, and ask
            us to provide your data in a format that allows you to transfer it
            to another service provider. You also may withdraw your consent at
            any time where we are relying on your consent for the processing of
            your personal data. And you may object to our processing of your
            personal data (this means ask us to stop using it) where that
            processing is based on our legitimate interest (this means we have a
            legitimate reason for using the data for a certain purpose and this
            reason is not outweighed by your interest in P&G not using it). To
            make a request, click here .<br />
            <br /> If you would like more information about data protection and
            your personal data rights in general, please visit the European Data
            Protection Supervisor’s site at
            https://edps.europa.eu/data-protection/ or the UK Information
            Commissioner’s Office site at https://ico.org.uk. If you are not
            happy with our response to your requests, you may lodge a complaint
            with the data protection authority in your country.
            <br />
            <br /> Procter and Gamble España SA adheres to the Code of Conduct
            for Data Protection in AUTOCONTROL, accredited by the Spanish Data
            Protection Agency and therefore is subject to its extrajudicial
            system of data processing complaints when related to data protection
            and advertising, available for those interested on the website
            www.autocontrol.es.
          </p>
        </AccordionItem>
        <AccordionItem title="Dental Professionals">
          <p>
            If you are a dental professional and have provided your personal
            data to us as part of one of our professional outreach programs,
            including through https://www.dentalcare.com, please contact us
            through your local P&G representative, e.g. Oral-B.
          </p>
        </AccordionItem>
        <AccordionItem title="Healthcare Professionals">
          <p>
            If you are a healthcare professional and have provided your personal
            data to us as part of one of our professional outreach programs or
            any other form of collaboration, please contact us through your
            local or regional P&G representative.
          </p>
        </AccordionItem>
        <AccordionItem title="Consumer Research Participants">
          <p>
            To make a request with respect to personal data we may have as part
            of your participation in one of our research studies, please see the
            contact information provided on your consent form or call or visit
            your research center.
          </p>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem title="How We Disclose Personal Data">
        <AccordionItem title="With Your Consent">
          <p>
            When we have your consent, we may disclose your personal data to
            others, such as select partners so they can send you offers,
            promotions, or ads about products or services we believe you may be
            interested in. For example, people who receive P&G emails from our
            diaper brands such as Pampers® may also consent to hear about baby
            formulas from other companies.
          </p>
        </AccordionItem>
        <AccordionItem title="Online Platforms and Ad Tech Companies">
          <p>
            Our websites and applications may make available contact
            information, unique identifiers, inferred and derived information,
            online and technical information and geolocation data with online
            platforms and ad tech companies to help us serve you relevant
            advertisements and offers, subject to applicable legal requirements,
            which may include consent and/or opt-outs. We do not sell your
            personal data to marketers outside of P&G in exchange for monetary
            compensation. Please see the U.S. State Privacy Notice section of
            the privacy policy below for additional information.
          </p>
        </AccordionItem>
        <AccordionItem title="Vendors">
          <p>
            We may disclose or otherwise make available your personal data to
            our vendors (including “service providers” and “processors” defined
            under applicable laws, which we collectively refer to as “service
            providers” or “vendors” herein) who help us run our business. This
            includes hosting our sites, processing payment information for the
            purchases made by you through our sites, delivering our emails and
            marketing communications to you, analyzing the data we collect,
            helping us with sales attribution (e.g., to see if we showed you an
            ad on a platform site and then you bought a product from us) and
            sending you the products and services you requested. We also
            disclose or otherwise make available your personal data with
            lawyers, auditors, consultants, information technology and security
            firms, and others who provide services to us. We disclose or
            otherwise make available only the personal data needed for these
            companies to complete the tasks we request or, where permitted by
            applicable law, use the personal data for certain internal purposes
            such as security or fraud detection. We instruct our service
            providers to appropriately process and protect your personal data.
          </p>
        </AccordionItem>
        <AccordionItem title="Payments for Purchases">
          <p>
            Payments for purchases made through some of our sites are completed
            using a third-party vendor’s online payment system. For these sites,
            P&G does not have access to your credit card information provided
            for purchases and does not store or disclose your credit card
            information as part of your purchases through these third-party
            systems. The personal or financial information you provide to our
            online payment system on these sites is subject to the third-party’s
            privacy policy and terms of use and we recommend you review these
            policies before providing any personal or financial information.
          </p>
        </AccordionItem>
        <AccordionItem title="Legal and Similar Reasons">
          <p>
            If a brand or one of our businesses that controls your personal
            data, or some or all of its business assets, are sold to another
            company, your personal data will be disclosed to that company. We
            may also disclose your information to companies who help us protect
            our rights and property, or when required by law, legal processes,
            government authorities or as reasonably necessary to protect the
            rights or interests of ourselves or others.
          </p>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem title="Types of Personal Data We Collect">
        <p style={{ color: "#000", fontWeight: "bold" }}>
          As a large company, with many products and businesses in many
          countries around the world, we collect the following types of personal
          data to best serve our consumers.
        </p>
        <p style={{ color: "#000" }}>
          Please be aware that this is a comprehensive list of various types of
          personal data we collect and that we only collect it when have a
          lawful basis to do so (for example when we have your consent, or when
          we need this information for the performance of a contract to which
          you are party, or when the processing is necessary based on our
          legitimate interest or for compliance with a legal obligation). Many
          of these types almost certainly will not apply to you. If you want to
          know what data we actually have about you, just ask.
        </p>
        <AccordionItem title="What We Typically Collect">
          <p>
            Contact Information: Data elements in this category include names
            (including nicknames and previous names), titles, mailing address,
            email address, telephone/mobile number and contact information for
            related persons (such as authorized users of your account).
            <br />
            <br />
            General Demographics & Psychographics: Data elements in this
            category include personal characteristics and preferences, such as
            age range, marital and family status, race and ethnicity (for
            example, in relation to information you provide in relation to your
            haircare or skincare purchases or preferences), shopping
            preferences, languages spoken, loyalty and rewards program data,
            household demographic data, data from social media platforms,
            education and professional information, hobbies and interests and
            propensity scores from third parties (likelihood of purchase,
            experiencing a life event, etc.).
            <br />
            <br />
            Transaction and Commercial Information: Data elements in this
            category include customer account information, qualification data,
            purchase history and related records (returns, product service
            records, records of payments, credits etc.), records related to
            downloads and purchases of products and applications, non-biometric
            data collected for consumer authentication (passwords, account
            security questions), customer service records.
            <br />
            <br />
            Unique IDs & Accounts Details: Data elements in this category
            include unique ID number (such as customer number, account number,
            subscription number, rewards program number), system identifiers
            (including username or online credentials), device advertisers,
            advertising IDs and IP address.
            <br />
            <br />
            Online & Technical Information: This includes internet or other
            electronic network activity information. Data elements in this
            category include IP addresses, MAC addresses, SSIDs or other device
            identifiers or persistent identifiers, online user IDs, encrypted
            passwords, device characteristics (such as browser information), web
            server logs, application logs, browsing data, viewing data (TV,
            streaming), website and app usage, first party cookies, third party
            cookies, web beacons, clear gifs and pixel tags. This also includes
            information such as your device functionality (browser, operating
            system, hardware, mobile network information); the URL that referred
            you to our website; the areas within our website or apps that you
            visit and your activities there (including emails, such as whether
            you open them or click on links within); your device
            characteristics; and device data and the time of day.
            <br />
            <br />
            Inferred Information: This includes information derived from other
            personal data listed in this section. We create inferred and derived
            data elements by analyzing all personal data we may have about you.
            Data elements in this category include propensities, attributes
            and/or scores generated by internal analytics programs.
          </p>
        </AccordionItem>
        <AccordionItem title="What We Sometimes Collect">
          <p>
            Precise Geolocation: Data elements in this category include precise
            location (such as latitude/longitude).
            <br />
            <br />
            Health-Related Information: Data elements based on how it is
            collected include:
            <br />
            <br />
            Information collected from consumer programs (such as when you
            register on our brand sites, participate in our rewards programs, or
            purchase our products)
            <br />
            <br />
            General health and symptom information
            <br />
            <br />
            Pregnancy-related information, such as due date
            <br />
            <br />
            Consumer Research Studies where you have provided your informed
            consent
            <br />
            <br />
            Information about physical or mental health, disease state, medical
            history or medical treatment or diagnosis, medicines taken and
            related information
            <br />
            <br />
            Information collected when you contact us to report a complaint or
            an adverse event occurring in connection with the use of one of our
            products
            <br />
            <br />
            Financial Account Information: Data elements in this category
            include bank account number and details and payment card information
            (e.g., when you make a purchase directly with a brand or receive a
            credit from a brand).
            <br />
            <br />
            Government-Issued IDs: Data elements in this category include
            governmental ID and Tax ID (e.g., for winners of a contest in
            jurisdictions where we are required to collect that information).
            <br />
            <br />
            Audio Visual Information: Data elements in this category include
            photographs, video images, CCTV recordings, Call Center recordings
            and call monitoring records, and voicemails (e.g., for research,
            when you visit our facilities, or when you call us).
            <br />
            <br />
            Smart Devices and Sensor Information: Data elements in this category
            include smart device records, IoT products (e.g., from an Oral B
            app-connected toothbrush).
            <br />
            <br />
            Data About Children: Data elements in this category may include the
            number of children you have, your children’s diaper sizes, their
            genders, and ages.
            <br />
            <br />
            Biometric Information: Data elements in this category include facial
            recognition data, and a mathematical representation of your
            biometric identifier, such as the template maintained for comparison
            (e.g., for healthcare research studies).
          </p>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem title="Legal Basis & Retention by Processing Purpose">
        <p>
          Generally, we keep your personal data for only as long as it is needed
          to complete the processing purpose for which it was collected or as
          required by law. We may need to keep your personal data for longer
          than our specified retention periods to honor your requests, including
          to continue keeping you opted out of marketing emails, or to comply
          with legal or other obligations. This section outlines why the
          processing purposes comply with the law (legal basis, as required by
          certain non-U.S. Privacy Laws such as the GDPR), and how long we keep
          the personal data used for that processing purpose, unless an
          exception applies (retention period), such as the ones noted above.
          Some U.S. Privacy Laws (defined below) require us to, on a
          per-category basis, disclose the retention period applicable to each
          such category of personal data. See the table set forth in our U.S.
          State Privacy Notice for this information.
        </p>
        <AccordionItem title="Products/Services">
          <p>
            Legal Basis:
            <br />
            <br /> - Performance of a Contract for fulfilling eCommerce sales
            <br />
            <br />- Consent for sampling programs <br />
            <br />
            - Legitimate Interest for coupon issuing and coupon clearing
            <br />
            <br />
            Retention Period: After no longer needed to provide you with the
            requested products or services unless required by law or contract to
            retain it further.
          </p>
        </AccordionItem>
        <AccordionItem title="Customer Management">
          <p>
            Legal Basis:
            <br />
            <br />
            Consent for:
            <br />
            <br />
            - sending you marketing email and text communications
            <br />
            <br />
            - processing your ratings and reviews of our products
            <br />
            <br />
            - collection and analysis of the information contained on the
            purchase receipts you upload for more personalized advertising
            <br />
            <br />
            - the processing of any special category data and certain sensitive
            personal data
            <br />
            <br />
            - non-essential tracking technologies on our websites and in our
            mobile apps in certain countries
            <br />
            <br />
            - Legitimate Interest for:
            <br />
            <br />
            - postal marketing (unless consent is required according to country
            laws)
            <br />
            <br />
            - delivering requested items to you
            <br />
            <br />
            - processing your personal data within our various marketing systems
            <br />
            <br />
            - Depending on the case, we may rely on our Legitimate Interest or
            Consent for:
            <br />
            <br />
            - the enrichment and combination of your registration data
            (including data that you disclose to us when interacting with our
            services, such as brand preferences, clipped coupons, etc.) with
            attributes, interests or demographic data obtained from commercially
            available sources or other third parties
            <br />
            <br />
            - Performance of a Contract for:
            <br />
            <br />
            - contests
            <br />
            <br />
            Retention Period: Until you request to delete the personal data or
            withdraw your consent. Otherwise, we will delete your personal data
            after no longer needed for the processing purpose or after a maximum
            of 50 months of non-activity unless required by law or contract to
            retain it further. We define inactivity through several internal
            criteria that indicate a user’s lack of interaction with our
            programs and communications. For example, if you do not log in, or
            do not open or click on our emails, we will consider you “inactive”
            and delete your data after a maximum of 50 months but sooner for
            certain countries depending on local legal requirements. We may need
            to keep some of your personal data to honor your requests, including
            to continue keeping you opted out of marketing emails, or to comply
            with other legal obligations. We may also retain certain personal
            data used in ratings and reviews for as long as the review is used
            or until the product is discontinued.
          </p>
        </AccordionItem>
        <AccordionItem title="Customer Service/Communications">
          <p>
            Legal Basis: <br /> <br />
            <br /> <br />
            Legitimate Interest for:
            <br /> <br />
            - managing consumer and business inquiries
            <br />
            <br />
            Consent for:
            <br />
            <br />
            - special category data/sensitive personal data which may be
            collected in some adverse event cases
            <br />
            <br />
            - Performance of a Contract for:
            <br />
            <br />
            - sending transactional/program information about your accounts,
            purchases, reward terms, etc.
            <br />
            <br />
            - engagement with professional influencers, business contacts,
            ambassadors, etc.
            <br />
            <br />
            Retention Period: Until you request to delete the personal data or
            withdraw your consent. Otherwise, we will delete your personal data
            after no longer needed for the processing purpose unless required by
            law or contract to retain it further.
          </p>
        </AccordionItem>
        <AccordionItem title="Payment/Financial">
          <p>
            Legal Basis: Performance of a Contract
            <br />
            <br />
            Retention Period: As long as necessary to fulfill the order unless
            required by law or contract to retain it further. We generally
            retain data for 24 months for cashback offers and 10 years for
            warranties.
          </p>
        </AccordionItem>
        <AccordionItem title="Serving Ads">
          <p>
            Legal Basis:
            <br />
            <br />
            - Consent for the deployment of tracking technologies on our own
            websites or within our own mobile applications. When we place
            tracking technologies on third-party properties or buy data from
            third-party vendors, we require them to obtain your consent before
            deploying our tracking technology or sharing your personal data with
            us.
            <br />
            <br />
            - Legitimate Interest for processing your email address, phone
            number, or mobile advertising ID to serve you relevant advertising
            across different media channels, including on social media
            platforms, via custom audiences and look-a-like audiences.
            <br />
            <br />
            Retention Period: After no longer needed for the processing purpose
            (i.e., after the ad campaign ends) or within a maximum of 110 months
            unless you opt-out sooner.
          </p>
        </AccordionItem>
        <AccordionItem title="Ads Administration">
          <p>
            Legal Basis: Legitimate Interest
            <br />
            <br />
            Retention Period: After no longer needed to fulfill the processing
            purpose. For personal data collecting via tracking technologies on
            our websites or within our mobile applications, within 12 months
            unless you opt-out prior.
          </p>
        </AccordionItem>
        <AccordionItem title="Quality & Safety">
          <p>
            Legal Basis: Legitimate Interest
            <br /> <br />
            Retention Period: After no longer needed to fulfill the processing
            purpose unless required by law or contract to retain it further. For
            personal data collecting via various tracking technologies on our
            websites or within our mobile applications, within 12 months unless
            you opt-out prior.
          </p>
        </AccordionItem>
        <AccordionItem title="Security">
          <p>
            Legal Basis: Legitimate Interest
            <br /> <br />
            Retention Period: After no longer needed to fulfill the processing
            purpose unless required by law or contract to retain it further. For
            personal data collecting via tracking technologies on our websites
            or within our mobile applications, within 12 months.
          </p>
        </AccordionItem>
        <AccordionItem title="Recordkeeping and Auditing">
          <p>
            Legal Basis:
            <br /> <br />
            Performance of a Contract for transactional data
            <br /> <br />
            Legal Obligation for certain recordkeeping activities
            <br /> <br />
            Retention Period: After no longer needed to fulfill the processing
            purpose unless required by law to retain it further.
          </p>
        </AccordionItem>
        <AccordionItem title="Legal/Compliance">
          <p>
            Legal Basis: Legal Obligation
            <br /> <br />
            Retention Period: After no longer needed to fulfill the processing
            purpose unless required by law to retain it further.
          </p>
        </AccordionItem>
        <AccordionItem title="Research & Development (“R&D”)">
          <p>
            Legal Basis: Consent
            <br /> <br />
            Retention Period: We retain non-biometric personal data collected
            from clinical research as long as needed for the purpose for which
            it was collected, or 30 years after the purpose of collection is
            fulfilled, and/or for as long as may be required to retain it by
            local law, regulation or good clinical research practice, whichever
            is later. For non-clinical research, we will retain non-biometric
            personal data for a maximum of 5 years after the time of collection,
            or after the purpose of collection is fulfilled, whichever is later.
            For biometric data, we will retain for as long as necessary to
            fulfil the purpose of collection or processing, unless we are
            required to retain it longer for legal or regulatory compliance
            purposes, or to exercise or defend our legal interests. We may
            retain your signed informed consent documents longer.
          </p>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem title="Children’s Personal Data">
        <p>
          We follow all applicable data protection laws when collecting personal
          data online from children, including by obtaining parental consent
          where required, based on the applicable age standard. For example, we
          obtain consent from the holder of parental responsibility of a child
          in the EEA, Switzerland, Serbia, and the UK when we collect personal
          data from children under 16 years of age. Similarly, in the U.S., we
          obtain verified parental consent when collecting personal data from
          children younger than 13. In Canada, these verified parental consent
          measures are in place for minors younger than 14. We do not use
          personal data collected from children for targeted advertising.
        </p>
      </AccordionItem>
      <AccordionItem title="How We Protect Your Personal Information">
        <p style={{ color: "#00A3E0", fontWeight: "bold" }}>
          Your privacy is important. That’s why we respect it by taking steps to
          protect your personal data from loss, misuse, or alteration.
        </p>
        <p>
          We have processes and controls in place to appropriately manage
          personal data, including its collection, use, disclosure, retention,
          and destruction. We respect your personal data and take steps to
          protect it from loss, misuse, or alteration. Where appropriate, these
          steps can include technical measures like firewalls, intrusion
          detection and prevention systems, unique and complex passwords, and
          encryption. We also use organizational and physical measures such as
          training staff on data processing obligations, identification of data
          incidents and risks, restricting staff access to your personal
          information, and ensuring physical security including appropriately
          securing documents when not being used.
        </p>
      </AccordionItem>
      <AccordionItem title="International Transfers">
        <p>
          P&G has its head offices in the United States, regional offices in
          Singapore, Dubai, Geneva and Panama and further P&G service centers in
          other countries, like Costa Rica or Philippines. As a multinational
          company, P&G undertakes data transfers, either within the P&G group of
          entities, or when sharing your data with service providers or selected
          partners that may store, process, or access your data in a country
          other than the one in which it was collected, including the United
          States. Personal data collected from Quebec, for example, may be
          transferred outside of Canada with adequate protections and safeguards
          in place.
          <br />
          <br />
          As far as EU citizens are concerned, (but also citizens of
          Switzerland, UK and Serbia for example) this means that their data may
          be processed outside of the European Economic Area (EEA), either in
          countries have been recognized by the European Commission to offer
          adequate data protection, like the United Kingdom (from where, for
          example, some of our fulfillment, return and contact center services
          are managed for the EU region), or Switzerland (where our EU
          headquarters are located), or in other countries that are not deemed,
          by the European Commission, as offering such level of data protection.
          For such transfers of data, because special safeguards need to be
          foreseen to ensure that the protection travels with the data, we use
          the EU Standard Contractual Clauses, standardized and pre-approved
          model data protection clauses. You can find the latest version of the
          approved EU Standard Contractual Clauses, including the different
          transfer modules, here. Our transfer agreements also incorporate the
          standard data protection clauses issued in accordance with UK, Swiss
          and Serbian data protection law If you have any questions with
          reference to our data transfer agreements, please contact us.
          <br />
          <br />
          If you are located in the European Economic Area (EEA), United Kingdom
          (and Gibraltar) or Switzerland, please note that P&G is certified
          under the EU-U.S. Data Privacy Framework (EU-U.S. DPF), the UK
          Extension to the EU-U.S. DPF and the Swiss-U.S. Data Privacy Framework
          (Swiss-U.S. DPF) [collectively, the “Data Privacy Framework”]
          developed by the U.S. Department of Commerce and the European
          Commission and Information Commissioner and Swiss Federal Data
          Protection, respectively, regarding the transfer of personal
          information from the EEA, United Kingdom (and Gibraltar) or
          Switzerland to the U.S., Click here to view our Data Privacy
          Framework: Consumer Privacy Policy.
          <br />
          <br />
          For non-EEA and UK data, we perform such transfers based on your
          consent, or on our contracts, where so required by local law.
        </p>
      </AccordionItem>
      <AccordionItem title="Additional Regional Notices">
        <AccordionItem title="U.S. State Privacy Disclosure and Consumer Rights (“U.S. State Privacy Notice”)">
          <p>
            Region-specific notices and information regarding your personal
            data...
          </p>
        </AccordionItem>
        <AccordionItem title="EEA, UK and Serbia Privacy">
          <p>
            Region-specific notices and information regarding your personal
            data...
          </p>
        </AccordionItem>
        <AccordionItem title="Colombia Privacy">
          <p>
            Region-specific notices and information regarding your personal
            data...
          </p>
        </AccordionItem>
        <AccordionItem title="Nigeria Privacy">
          <p>
            Region-specific notices and information regarding your personal
            data...
          </p>
        </AccordionItem>
        <AccordionItem title="Vietnam Privacy">
          <p>
            Region-specific notices and information regarding your personal
            data...
          </p>
        </AccordionItem>
      </AccordionItem>
      <AccordionItem title="Contact Us">
        <p style={{ color: "#00A3E0", fontWeight: "bold" }}>
          Still have a question or concern? We’re here to help.
        </p>
        <p>
          Please contact us directly with any questions or concerns you may have
          about your privacy and our data protection practices or if you are a
          consumer with a disability and need a copy of this notice in an
          alternative format. If you have an inquiry that is specific to our
          data protection officer, such as a suspected data breach, please state
          that in your message. You may also write to our Data Protection
          Officer at 1 Procter & Gamble Plaza, Cincinnati, OH 45202, U.S.A.
          <br />
          <br />
          Art. 27 GDPR Representative:
          <br />
          <br />
          The contact details of our Art. 27 GDPR representative in the UK and
          EU are as follows: Procter & Gamble Ireland, The Graan House, Units E1
          and E14, Calmount Business Park, Dublin 12, Ireland
        </p>
      </AccordionItem>
    </div>
  );
};

export default Section2;
