import { Link } from "@/components/utility/link"
import React from "react"
import s from "./privacy-policy.module.scss"

type Props = {}

const PrivacyPolicy = (props: Props) => {
  return (
    <div className={s.privacyPolicy}>
      <h5>Privacy Policy</h5>
      <p>
        JUST DESIGN FX®, Inc. (“Just Design”) provides this website,{" "}
        <Link
          href="/"
          // onClick={handleModal}
        >
          justdesignfx.com
        </Link>{" "}
        for informational purposes. By accessing the website, you accept these Terms and Conditions of use and Privacy
        Policy, as may be amended from time to time, without limitation or qualification. If you do not wish to be bound
        by these Terms and Conditions, please refrain from further use of the website.
      </p>
      <h5>All Content is Protected by Copyright Laws</h5>
      <p>
        Images, text, software, documentation, electronic text and image files, audio and video files and clips, and
        other materials on the Website are protected by copyright laws and may be covered by other restrictions as well.
        JUST DESIGN FX retains all rights it may hold, including copyright, in data, image, text, and any other
        information contained in these files. Copyrights and other proprietary rights in the material on the Website may
        also subsist in individuals and entities other than, and in addition to, JUST DESIGN FX. JUST DESIGN FX
        expressly prohibits the copying of any protected materials on the Website.
      </p>
      <h5>Commercial Use is Restricted</h5>
      <p>
        Unauthorized publication or exploitation of Just Design’s files is specifically prohibited. Anyone wishing to
        use any of these files or images for commercial use, publication, or any other purpose must request and receive
        prior written permission. All requests to reproduce content from the Website should be made with{" "}
        <a href="mailto:media@justdesignfx.com">media@justdesignfx.com</a>
      </p>
      <h5>Reservation of Rights</h5>
      <p>
        All rights not expressly granted by Just Design herein are specifically and completely reserved. Nothing on the
        Website or in these Terms and Conditions grants, expressly or implicitly, by estoppel or otherwise, any right or
        license to use any content or property of any third party, or may be construed to mean that Just Design has
        authority to grant any right or license on behalf of any third party.
      </p>
      <h5>Protection of Privacy</h5>
      <p>
        Just Design is committed to protecting the privacy of its Website visitors in accordance with applicable laws
        and regulations.
      </p>
      <p>
        Just Design collects and stores aggregated, anonymized or pseudonymized information about your activity on and
        interaction with the Website, such as your IP address, the type of device or browser you use, and your actions
        on the Website. If you sign up for the Newsletter, Just Design also collects and stores your email address.
      </p>
      <p>Just Design uses the information it collects for the following purposes:</p>
      <ul>
        <li>
          <p>
            To track and analyze use of the Website so Just Design can provide users with the best experience possible.
          </p>
        </li>
        <li>
          <p>To communicate with you about updates.</p>
        </li>
      </ul>
      <p>
        Just Design will indefinitely retain the aggregated, anonymized or pseudonymized information Just Design
        collects from you to protect the safety and security of the Website, improve the Website, or comply with legal
        obligations. Just Design will also retain your email addresses for as long as you are subscribed to the
        Newsletter. You will always have the opportunity to unsubscribe from future Newsletter correspondence.
      </p>
      <p>
        Just Design may include links to other websites or services whose privacy practices may differ from Just
        Design’s. When you use a link to an external website or service, the privacy policy and data processing
        disclosures for that website or service governs.
      </p>
      <p>
        Residents of the European Economic Area and Switzerland are afforded certain rights regarding their personal
        information. Except where an exception or exemption applies, these rights include the ability to request access,
        corrections, and deletion of personal information. While these rights are not applicable globally, all Website
        users can request access to, the correction of, or the deletion of their email addresses collected in connection
        with the bulletin. Such requests should be directed to
        <a href="mailto:hello@justdesignfx.com">hello@justdesignfx.com</a>
      </p>
      <h5>Links to Third-Party Websites</h5>
      <p>
        Just Design has not reviewed all the websites or services linked to or from the Website. Just Design provides
        these links as a convenience and linking to any third-party websites or services is at the user&apos;s own risk.
        A link does not imply endorsement or affiliation with the linked website by Just Design.
      </p>
      <h5>DISCLAIMER</h5>
      <p>
        JUST DESIGN PROVIDES THE WEBSITE ON AN “AS IS” BASIS. YOUR USE OF THE WEBSITE OR ITS CONTENTS IS AT YOUR OWN
        RISK. JUST DESIGN DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, COPYRIGHT OR TRADEMARK OWNERSHIP
        AND/OR NONINFRINGEMENT OF COPYRIGHTS OR OTHER THIRD PARTY PROPRIETARY RIGHTS. JUST DESIGN DOES NOT WARRANT THAT
        THE WEBSITE WILL PROVIDE CONTINUOUS, PROMPT, SECURE, OR ERROR-FREE SERVICE. JUST DESIGN MAKES REASONABLE,
        ONGOING EFFORTS TO REVISE AND UPDATE THE WEBSITE, BUT ASSUMES NO LIABILITY FOR ANY ERRORS OR OMISSIONS,
        INCLUDING THE INACCURACY OF CONTENT, OR FOR ANY DAMAGES OR LOSSES THAT YOU OR ANY THIRD PARTY MAY INCUR AS A
        RESULT OF THE UNAVAILABILITY OF THE WEBSITE. JUST DESIGN ASSUMES NO RESPONSIBILITY, AND SHALL NOT BE LIABLE FOR,
        ANY DAMAGES TO YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY ARISING FROM YOUR USE OF THE WEBSITE, INCLUDING BUT NOT
        LIMITED TO THE REPRODUCTION OF THE WEBSITE’S CONTENT.
      </p>
      <h5>LIMITATION OF LIABILITY</h5>
      <p>
        NEITHER JUST DESIGN, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS WILL HAVE ANY LIABILITY FOR ANY
        DAMAGES, INCLUDING, WITHOUT LIMITATION, ANY DIRECT, INDIRECT, INCIDENTAL, COMPENSATORY, PUNITIVE, SPECIAL, OR
        CONSEQUENTIAL DAMAGES (EVEN IF JUST DESIGN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) ARISING FROM OR
        RELATED TO YOUR USE OF THE WEBSITE AND/OR ITS CONTENTS.
      </p>
      <h5>Indemnification</h5>
      <p>
        By using the Website in any manner, you represent and warrant that your use will be consistent with these Terms
        and Conditions. You agree to indemnify, defend, and hold Just Design, its affiliates, directors, officers,
        employees, and agents harmless from all claims, causes, costs, expenses, fees (including reasonable attorneys’
        fees), judgments, liabilities, losses, and damages arising from or relating to your use of the Website.
      </p>
      <h5>Entire Agreement; Severance; Waiver</h5>
      <p>
        These Terms and Conditions incorporate by reference any notices on the Website and constitute the entire
        agreement regarding user access to the Website. If any provision of the Terms and Conditions -is deemed
        unlawful, void, or unenforceable, that provision will be severable from the remaining provisions and will not
        affect their validity and enforceability. Just Design’s failure to enforce a provision on any occasion will not
        be construed as a waiver of such provision.
      </p>
      <small>
        These Terms and Conditions were last modified on
        <br /> 01 May, 2022.
      </small>
    </div>
  )
}

export default PrivacyPolicy
