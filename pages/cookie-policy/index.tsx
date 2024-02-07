import { Link } from "@/components/utility/link"
import React from "react"
import s from "./cookie-policy.module.scss"

type Props = {}

const CookiePolicy = (props: Props) => {
  return (
    <div className={s.cookiePolicy}>
      <h5>Cookie Policy</h5>
      <p>
        This cookie policy (“Cookie Policy”) is intended to inform you how we use “cookies” and similar technologies on
        our website at{" "}
        <Link
          href="/"
          // onClick={modalStore.toggle}
        >
          justdesignfx.com
        </Link>{" "}
        and to assist you in making informed decisions when using our Site. Please take a moment to read and understand
        this Cookie Policy. This Cookie Policy should also be read in conjunction with our Privacy Policy .
      </p>
      <h5>What are cookies?</h5>
      <p>
        Cookies and similar technologies are very small text documents or pieces of code, which often include an
        anonymous unique identifier. When you visit a website or use a mobile application, a computer asks your computer
        or mobile device for permission to store this file on your computer or mobile device and access information from
        it. Information gathered through cookies and similar technologies may include the date and time of visits and
        how you are using the particular website or mobile application.
      </p>
      <p>
        We may use first and third party cookies on our Site and/or in our emails. First party cookies are cookies
        placed by us to collect information about you. However, certain cookies available on our Site and/or in our
        emails are placed by third party website operators. This means that the information about you collected by those
        third party cookies will be shared with the relevant third party. Please refer to the relevant third party
        website operator’s privacy notice for more information about how they may use such information.
      </p>
      <p>
        For more details on cookies and similar technologies, please visit{" "}
        <a target="_blank" rel="noreferrer" href="http://www.allaboutcookies.org">
          All About Cookies
        </a>
        . For the purposes of the remaining sections of this Cookie Policy, we will refer to all technologies using the
        above features as “cookies”.
      </p>
      <h5>How long do cookies last?</h5>
      <p>
        <span className={s.inlineItalic}>Session Cookies</span> – these are temporary cookies that expire (and are
        automatically erased) whenever you close your browser.
      </p>
      <p>
        <span className={s.inlineItalic}>Persistent Cookies </span> – these usually have an expiration date and so stay
        in your browser until they expire, or until you manually delete them.
      </p>
      <h5>Cookies used on our site</h5>
      <p>We use the following types of cookies on our Site:</p>
      <p>
        <span className={s.inlineItalic}>Essential Cookies </span> – Essential cookies are those cookies which are
        essential for the operation of a website.
      </p>
      <p>
        <span className={s.inlineItalic}>Functionality Cookies </span> – These cookies recognise you when you return to
        a website, they remember your preferences and they provide enhanced, more personalised features.
      </p>
      <p>
        <span className={s.inlineItalic}>Analytics/Performance Cookies</span>– Analytics cookies, along with other
        information, allow websites to calculate the aggregate number of people using a website and which features of a
        website are most popular. This information is generally used to improve the website.
      </p>
      <p>
        <span className={s.inlineItalic}>Social Media Cookies</span> – These cookies are used to personalise your
        interaction with social media, such as Twitter, Facebook, Tumblr and YouTube. Such cookies recognise users of
        those social media sites when you view social media content on the website. They also allow you to quickly share
        content across social media, through the use of simple “sharing” buttons. Some websites may also contain
        features that enable you to use your social media account to sign in and create/maintain an account with the
        website you are visiting and to enable the website operator to store your content. This involves the use of
        cookies.
      </p>
      <p>
        The bullet points below set out more information about the individual cookies we may use on our Site and the
        purposes for which they are used.
      </p>
      <ul>
        <li>
          <p>
            {" "}
            _ga - 3rd party, analytical, lasts 2 years. This is a Google Analytics cookie. It registers a unique ID that
            is used to generate statistical data on the use of our Site. More information about Google Analytics can be
            found here:{" "}
            <a target="_blank" rel="noreferrer" href="http://www.google.com/intl/en/analytics/privacyoverview.html">
              http://www.google.com/intl/en/analytics/privacyoverview.html
            </a>
          </p>
        </li>
        <li>
          <p>
            _gat - 3rd party, analytical, lasts for the session only. This is a Google Analytics cookie. It is used to
            throttle the request rate on our Site. More information about Google Analytics can be found here:{" "}
            <a target="_blank" rel="noreferrer" href="http://www.google.com/intl/en/analytics/privacyoverview.html">
              <span>http://www.google.com/intl/en/analytics/privacyoverview.html</span>
            </a>
          </p>
        </li>
        <li>
          <p>
            _gid - 3rd party, analytical, lasts for the session only. This is a Google Analytics cookie. It registers a
            unique ID that is used to generate statistical data on the use of our Site. More information about Google
            Analytics can be found here:{" "}
            <a target="_blank" rel="noreferrer" href="http://www.google.com/intl/en/analytics/privacyoverview.html">
              http://www.google.com/intl/en/analytics/privacyoverview.html
            </a>
          </p>
        </li>
      </ul>
      <h5>Consent to use cookies</h5>
      <p>
        <span className={s.inlineItalic}>Non-essential Cookies</span> – We may only store and access non-essential
        cookies on your device with your permission. You are not obliged to give consent to our use of non-essential
        cookies. Further, if you give your consent and then change your mind you can block or delete them (see below).
      </p>
      <p>
        <span className={s.inlineItalic}>Essential Cookies</span> – Please note that we do not need your consent to
        store and access essential cookies on your device, although you can still block or delete them (see below).
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
        functional cookies. If you subsequently block or delete those cookies, some aspects of our Site may not work
        properly and you may not be able to access all or part of our Site.
      </p>
      <h5>Cookies used in emails</h5>
      <p>
        Please note that any emails you receive from us may contain cookies or similar technologies to help us to see if
        recipients have opened an email and understand how recipients have interacted with it. Once you click on an
        email that contains a cookie, your contact information may subsequently be cross-referenced to [the source
        email] and/or the relevant cookie. If you have enabled images, cookies may be set on your computer or mobile
        device. Cookies will also be set if you click on any link within the email.
      </p>
      <p>
        If you do not wish to accept cookies from any one of our emails, simply close the email before downloading any
        images or clicking on any links. You can also set your browser to restrict cookies or to reject them entirely.
        These settings will apply to all cookies whether included on websites or in emails.
      </p>
      <p>
        In some instances, depending on your email or browser settings, cookies in an email may be automatically
        accepted (for example, when you&apos;ve added an email address to your address book or safe senders list).
        Please refer to your email browser or device instructions for more information on this.
      </p>
      <small>Last updated 01 May 2022</small>
    </div>
  )
}

export default CookiePolicy
