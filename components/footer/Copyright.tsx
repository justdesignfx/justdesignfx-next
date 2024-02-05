import s from "assets/scss/Copyright.module.scss"

import cx from "clsx"

import behance from "assets/img/icon-behance.svg"
import instagram from "assets/img/icon-instagram.svg"
import linkedin from "assets/img/icon-linkedin.svg"
import { Link } from "../utility/link"
import { Img } from "../utility/img"

const Copyright = () => {
  // const modalStore = useModalStore()

  // const handleModal = (modalType?: any) => {
  //   modalStore.setContent(renderModal(modalType))
  //   if (!modalStore.open) modalStore.toggle()
  // }

  const renderModal = (modalType: any) => {
    switch (modalType) {
      case "COOKIE_MODAL":
        return (
          <div className={cx(s.privacyAndCookieModal, s.cookie)}>
            <h5>Cookie Policy</h5>
            <p>
              This cookie policy (“Cookie Policy”) is intended to inform you how we use “cookies” and similar
              technologies on our website at{" "}
              <Link
                href="/"
                // onClick={modalStore.toggle}
              >
                justdesignfx.com
              </Link>{" "}
              and to assist you in making informed decisions when using our Site. Please take a moment to read and
              understand this Cookie Policy. This Cookie Policy should also be read in conjunction with our Privacy
              Policy .
            </p>
            <h5>What are cookies?</h5>
            <p>
              Cookies and similar technologies are very small text documents or pieces of code, which often include an
              anonymous unique identifier. When you visit a website or use a mobile application, a computer asks your
              computer or mobile device for permission to store this file on your computer or mobile device and access
              information from it. Information gathered through cookies and similar technologies may include the date
              and time of visits and how you are using the particular website or mobile application.
            </p>
            <p>
              We may use first and third party cookies on our Site and/or in our emails. First party cookies are cookies
              placed by us to collect information about you. However, certain cookies available on our Site and/or in
              our emails are placed by third party website operators. This means that the information about you
              collected by those third party cookies will be shared with the relevant third party. Please refer to the
              relevant third party website operator’s privacy notice for more information about how they may use such
              information.
            </p>
            <p>
              For more details on cookies and similar technologies, please visit{" "}
              <a target="_blank" rel="noreferrer" href="http://www.allaboutcookies.org">
                All About Cookies
              </a>
              . For the purposes of the remaining sections of this Cookie Policy, we will refer to all technologies
              using the above features as “cookies”.
            </p>
            <h5>How long do cookies last?</h5>
            <p>
              <span className={s.inlineItalic}>Session Cookies</span> – these are temporary cookies that expire (and are
              automatically erased) whenever you close your browser.
            </p>
            <p>
              <span className={s.inlineItalic}>Persistent Cookies </span> – these usually have an expiration date and so
              stay in your browser until they expire, or until you manually delete them.
            </p>
            <h5>Cookies used on our site</h5>
            <p>We use the following types of cookies on our Site:</p>
            <p>
              <span className={s.inlineItalic}>Essential Cookies </span> – Essential cookies are those cookies which are
              essential for the operation of a website.
            </p>
            <p>
              <span className={s.inlineItalic}>Functionality Cookies </span> – These cookies recognise you when you
              return to a website, they remember your preferences and they provide enhanced, more personalised features.
            </p>
            <p>
              <span className={s.inlineItalic}>Analytics/Performance Cookies</span>– Analytics cookies, along with other
              information, allow websites to calculate the aggregate number of people using a website and which features
              of a website are most popular. This information is generally used to improve the website.
            </p>
            <p>
              <span className={s.inlineItalic}>Social Media Cookies</span> – These cookies are used to personalise your
              interaction with social media, such as Twitter, Facebook, Tumblr and YouTube. Such cookies recognise users
              of those social media sites when you view social media content on the website. They also allow you to
              quickly share content across social media, through the use of simple “sharing” buttons. Some websites may
              also contain features that enable you to use your social media account to sign in and create/maintain an
              account with the website you are visiting and to enable the website operator to store your content. This
              involves the use of cookies.
            </p>
            <p>
              The bullet points below set out more information about the individual cookies we may use on our Site and
              the purposes for which they are used.
            </p>
            <ul>
              <li>
                <p>
                  {" "}
                  _ga - 3rd party, analytical, lasts 2 years. This is a Google Analytics cookie. It registers a unique
                  ID that is used to generate statistical data on the use of our Site. More information about Google
                  Analytics can be found here:{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.google.com/intl/en/analytics/privacyoverview.html"
                  >
                    http://www.google.com/intl/en/analytics/privacyoverview.html
                  </a>
                </p>
              </li>
              <li>
                <p>
                  _gat - 3rd party, analytical, lasts for the session only. This is a Google Analytics cookie. It is
                  used to throttle the request rate on our Site. More information about Google Analytics can be found
                  here:{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.google.com/intl/en/analytics/privacyoverview.html"
                  >
                    <span>http://www.google.com/intl/en/analytics/privacyoverview.html</span>
                  </a>
                </p>
              </li>
              <li>
                <p>
                  _gid - 3rd party, analytical, lasts for the session only. This is a Google Analytics cookie. It
                  registers a unique ID that is used to generate statistical data on the use of our Site. More
                  information about Google Analytics can be found here:{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.google.com/intl/en/analytics/privacyoverview.html"
                  >
                    http://www.google.com/intl/en/analytics/privacyoverview.html
                  </a>
                </p>
              </li>
            </ul>
            <h5>Consent to use cookies</h5>
            <p>
              <span className={s.inlineItalic}>Non-essential Cookies</span> – We may only store and access non-essential
              cookies on your device with your permission. You are not obliged to give consent to our use of
              non-essential cookies. Further, if you give your consent and then change your mind you can block or delete
              them (see below).
            </p>
            <p>
              <span className={s.inlineItalic}>Essential Cookies</span> – Please note that we do not need your consent
              to store and access essential cookies on your device, although you can still block or delete them (see
              below).
            </p>
            <h5>Refusing, blocking and deleting cookies</h5>
            <p>
              You can block the use of cookies altogether by activating the relevant settings in your browser. For more
              information on cookie management and blocking or deleting cookies for a wide variety of browsers, visit{" "}
              <a target="_blank" rel="noreferrer" href="http://www.allaboutcookies.org">
                All About Cookies
              </a>
              .
            </p>
            <p>
              Please be aware that in order to use some parts of our Site you will need to allow certain essential or
              functional cookies. If you subsequently block or delete those cookies, some aspects of our Site may not
              work properly and you may not be able to access all or part of our Site.
            </p>
            <h5>Cookies used in emails</h5>
            <p>
              Please note that any emails you receive from us may contain cookies or similar technologies to help us to
              see if recipients have opened an email and understand how recipients have interacted with it. Once you
              click on an email that contains a cookie, your contact information may subsequently be cross-referenced to
              [the source email] and/or the relevant cookie. If you have enabled images, cookies may be set on your
              computer or mobile device. Cookies will also be set if you click on any link within the email.
            </p>
            <p>
              If you do not wish to accept cookies from any one of our emails, simply close the email before downloading
              any images or clicking on any links. You can also set your browser to restrict cookies or to reject them
              entirely. These settings will apply to all cookies whether included on websites or in emails.
            </p>
            <p>
              In some instances, depending on your email or browser settings, cookies in an email may be automatically
              accepted (for example, when you've added an email address to your address book or safe senders list).
              Please refer to your email browser or device instructions for more information on this.
            </p>
            <small>Last updated 01 May 2022</small>
          </div>
        )
      case "PRIVACY_MODAL":
        return (
          <div className={cx(s.privacyAndCookieModal, s.privacy)}>
            <h5>Privacy Policy</h5>
            <p>
              JUST DESIGN FX®, Inc. (“Just Design”) provides this website,{" "}
              <Link
                href="/"
                // onClick={handleModal}
              >
                justdesignfx.com
              </Link>{" "}
              for informational purposes. By accessing the website, you accept these Terms and Conditions of use and
              Privacy Policy, as may be amended from time to time, without limitation or qualification. If you do not
              wish to be bound by these Terms and Conditions, please refrain from further use of the website.
            </p>
            <h5>All Content is Protected by Copyright Laws</h5>
            <p>
              Images, text, software, documentation, electronic text and image files, audio and video files and clips,
              and other materials on the Website are protected by copyright laws and may be covered by other
              restrictions as well. JUST DESIGN FX retains all rights it may hold, including copyright, in data, image,
              text, and any other information contained in these files. Copyrights and other proprietary rights in the
              material on the Website may also subsist in individuals and entities other than, and in addition to, JUST
              DESIGN FX. JUST DESIGN FX expressly prohibits the copying of any protected materials on the Website.
            </p>
            <h5>Commercial Use is Restricted</h5>
            <p>
              Unauthorized publication or exploitation of Just Design’s files is specifically prohibited. Anyone wishing
              to use any of these files or images for commercial use, publication, or any other purpose must request and
              receive prior written permission. All requests to reproduce content from the Website should be made with{" "}
              <a href="mailto:media@justdesignfx.com">media@justdesignfx.com</a>
            </p>
            <h5>Reservation of Rights</h5>
            <p>
              All rights not expressly granted by Just Design herein are specifically and completely reserved. Nothing
              on the Website or in these Terms and Conditions grants, expressly or implicitly, by estoppel or otherwise,
              any right or license to use any content or property of any third party, or may be construed to mean that
              Just Design has authority to grant any right or license on behalf of any third party.
            </p>
            <h5>Protection of Privacy</h5>
            <p>
              Just Design is committed to protecting the privacy of its Website visitors in accordance with applicable
              laws and regulations.
            </p>
            <p>
              Just Design collects and stores aggregated, anonymized or pseudonymized information about your activity on
              and interaction with the Website, such as your IP address, the type of device or browser you use, and your
              actions on the Website. If you sign up for the Newsletter, Just Design also collects and stores your email
              address.
            </p>
            <p>Just Design uses the information it collects for the following purposes:</p>
            <ul>
              <li>
                <p>
                  To track and analyze use of the Website so Just Design can provide users with the best experience
                  possible.
                </p>
              </li>
              <li>
                <p>To communicate with you about updates.</p>
              </li>
            </ul>
            <p>
              Just Design will indefinitely retain the aggregated, anonymized or pseudonymized information Just Design
              collects from you to protect the safety and security of the Website, improve the Website, or comply with
              legal obligations. Just Design will also retain your email addresses for as long as you are subscribed to
              the Newsletter. You will always have the opportunity to unsubscribe from future Newsletter correspondence.
            </p>
            <p>
              Just Design may include links to other websites or services whose privacy practices may differ from Just
              Design’s. When you use a link to an external website or service, the privacy policy and data processing
              disclosures for that website or service governs.
            </p>
            <p>
              Residents of the European Economic Area and Switzerland are afforded certain rights regarding their
              personal information. Except where an exception or exemption applies, these rights include the ability to
              request access, corrections, and deletion of personal information. While these rights are not applicable
              globally, all Website users can request access to, the correction of, or the deletion of their email
              addresses collected in connection with the bulletin. Such requests should be directed to
              <a href="mailto:hello@justdesignfx.com">hello@justdesignfx.com</a>
            </p>
            <h5>Links to Third-Party Websites</h5>
            <p>
              Just Design has not reviewed all the websites or services linked to or from the Website. Just Design
              provides these links as a convenience and linking to any third-party websites or services is at the user's
              own risk. A link does not imply endorsement or affiliation with the linked website by Just Design.
            </p>
            <h5>DISCLAIMER</h5>
            <p>
              JUST DESIGN PROVIDES THE WEBSITE ON AN “AS IS” BASIS. YOUR USE OF THE WEBSITE OR ITS CONTENTS IS AT YOUR
              OWN RISK. JUST DESIGN DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, COPYRIGHT OR
              TRADEMARK OWNERSHIP AND/OR NONINFRINGEMENT OF COPYRIGHTS OR OTHER THIRD PARTY PROPRIETARY RIGHTS. JUST
              DESIGN DOES NOT WARRANT THAT THE WEBSITE WILL PROVIDE CONTINUOUS, PROMPT, SECURE, OR ERROR-FREE SERVICE.
              JUST DESIGN MAKES REASONABLE, ONGOING EFFORTS TO REVISE AND UPDATE THE WEBSITE, BUT ASSUMES NO LIABILITY
              FOR ANY ERRORS OR OMISSIONS, INCLUDING THE INACCURACY OF CONTENT, OR FOR ANY DAMAGES OR LOSSES THAT YOU OR
              ANY THIRD PARTY MAY INCUR AS A RESULT OF THE UNAVAILABILITY OF THE WEBSITE. JUST DESIGN ASSUMES NO
              RESPONSIBILITY, AND SHALL NOT BE LIABLE FOR, ANY DAMAGES TO YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY
              ARISING FROM YOUR USE OF THE WEBSITE, INCLUDING BUT NOT LIMITED TO THE REPRODUCTION OF THE WEBSITE’S
              CONTENT.
            </p>
            <h5>LIMITATION OF LIABILITY</h5>
            <p>
              NEITHER JUST DESIGN, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS WILL HAVE ANY LIABILITY FOR
              ANY DAMAGES, INCLUDING, WITHOUT LIMITATION, ANY DIRECT, INDIRECT, INCIDENTAL, COMPENSATORY, PUNITIVE,
              SPECIAL, OR CONSEQUENTIAL DAMAGES (EVEN IF JUST DESIGN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES) ARISING FROM OR RELATED TO YOUR USE OF THE WEBSITE AND/OR ITS CONTENTS.
            </p>
            <h5>Indemnification</h5>
            <p>
              By using the Website in any manner, you represent and warrant that your use will be consistent with these
              Terms and Conditions. You agree to indemnify, defend, and hold Just Design, its affiliates, directors,
              officers, employees, and agents harmless from all claims, causes, costs, expenses, fees (including
              reasonable attorneys’ fees), judgments, liabilities, losses, and damages arising from or relating to your
              use of the Website.
            </p>
            <h5>Entire Agreement; Severance; Waiver</h5>
            <p>
              These Terms and Conditions incorporate by reference any notices on the Website and constitute the entire
              agreement regarding user access to the Website. If any provision of the Terms and Conditions -is deemed
              unlawful, void, or unenforceable, that provision will be severable from the remaining provisions and will
              not affect their validity and enforceability. Just Design’s failure to enforce a provision on any occasion
              will not be construed as a waiver of such provision.
            </p>
            <small>
              These Terms and Conditions were last modified on
              <br /> 01 May, 2022.
            </small>
          </div>
        )
      default:
        return <></>
    }
  }

  return (
    <div className={s.copyright}>
      <small className={s.text}>
        &#169; All work copyright of JUST DESIGN FX
        <sup style={{ paddingLeft: "2px", paddingRight: "6px" }}>&reg;</sup>
        2023
      </small>
      <div className={s.links}>
        <small
          className={s.link}
          // onClick={() => handleModal("COOKIE_MODAL")}
        >
          Cookie Policy
        </small>
        <small
          className={s.link}
          // onClick={() => handleModal("PRIVACY_MODAL")}
        >
          Privacy Policy
        </small>
      </div>
      <div className={s.col}>
        <div className={s.social}>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/justdesignfx/">
            <Img className={s.icon} src={instagram} alt="Instagram Logo" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.behance.net/justdesign_fx">
            <Img className={s.icon} src={behance} alt="Behance Logo" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://tr.linkedin.com/company/just-design-fx">
            <Img className={s.icon} src={linkedin} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Copyright
