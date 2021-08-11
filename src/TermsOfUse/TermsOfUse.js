import './TermsOfUse.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import DOMPurify from "dompurify";

function TermsOfUse({data}) {
  const pageHTMLContent = data && data[0] ? data[0].content : '';
  const safeHTML = DOMPurify.sanitize(pageHTMLContent);

  const getContent = () => {
    return <div className='terms-of-use-container'>
      <div dangerouslySetInnerHTML={{ __html: safeHTML }} />
    </div>
  }

  return <div className="terms-of-use">
    <Header/>
    {getContent()}
    {/*<div className='terms-of-use-container'>
      <p className='title'>Terms of Use Agreement</p> <br/> <br/>

      These Terms of Use Agreement (“Agreement”) apply to your access and use of this website, or the applications and other online products and services (collectively, our “Services”) provided by 3dzook Inc (“dzook” or “we”). <br/> <br/>

      <b>ARBITRATION NOTICE: YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</b> <br/> <br/>
      <b>If you do not agree to this Agreement, including the mandatory arbitration provision and class action waiver in Section 17, do not access or use our Services. </b> <br/>
      PLEASE NOTE THAT THE AGREEMENT IS SUBJECT TO CHANGE BY DZOOK IN ITS SOLE DISCRETION AT ANY TIME. When changes are made, we will make a new copy of the Agreement available at our website and within our mobile application. We will also update the “Last Updated” date at the top of the Agreement. If we make any material changes, we will also send push notification or show a pop-up to you via the dzook application. Any changes to the Agreement will be effective immediately for new users of the website, the mobile application and/or the Services and will be effective thirty (30) days after posting notice of such changes on the website for existing users, provided that any material changes shall be effective for existing users upon the earlier of thirty (30) days after posting notice of such changes on the website or thirty (30) days after dispatch of the push notification of such changes. We may require you to provide consent to the updated Agreement in a specified manner before further use of the website, the mobile application and/or the Services is permitted. If you do not agree to any change(s) after receiving a notice of such change(s), you shall stop using the Services, including the website and the mobile application. Otherwise, your continued use of the Services, including the website and the mobile application, constitutes your acceptance of such changes. PLEASE CHECK THE TERMS REGULARLY TO VIEW THE THEN-CURRENT AGREEMENT.
      If you have any questions about this Agreement or our Services, please contact us at terms@dzook.ai <br/> <br/>
      <b>1. Eligibility</b> <br/>
      You must be at least 13 years of age to access or use our Services. If you are under 18 years of age (or the age of legal majority where you live), you may only access or use our Services under the supervision of a parent or legal guardian who agrees to be bound by this Agreement. If you are a parent or legal guardian of a user under the age of 18 (or the age of legal majority), you agree to be fully responsible for the acts or omissions of such user in connection with our Services. If you are accessing or using our Services on behalf of another person or entity, you represent that you are authorized to accept this Agreement on that person or entity’s behalf and that the person or entity agrees to be responsible to us if you or the other person or entity violates this Agreement. <br/> <br/>
      <b>2. Privacy</b> <br/>
      Please refer to our Privacy Policy for information about how we collect, use and disclose information about you.
      <br/><br/><b>3. User Content</b> <br/>
      Our Services may allow you and other users to create, post, store and share content, including photos, videos, messages, text, software and other materials (collectively, “User Content”). User Content does not include user-generated filters. Subject to this Agreement and the Privacy Policy, you retain all rights in and to your User Content, as between you and dzook. Further, dzook does not claim ownership of any User Content that you post on or through the Services. You grant dzook a nonexclusive, royalty-free, worldwide, fully paid license to use, reproduce, modify, adapt, create derivative works from, distribute, perform and display your User Content during the term of this Agreement solely to provide you with the Services.
      You acknowledge that some of the Services are supported by advertising revenue and may display advertisements and promotions, and you hereby agree that dzook may place such advertising and promotions on the Services or on, about, or in conjunction with your User Content. The manner, mode and extent of such advertising and promotions are subject to change without specific notice to you. You acknowledge that we may not always identify paid services, sponsored content, or commercial communications as such.
      You represent and warrant that: (i) you own or otherwise have the right to use the User Content modified by you on or through the Services in accordance with the rights and licenses set forth in this Agreement; (ii) you agree to pay for all royalties, fees, and any other monies owed by reason of User Content you stylize on or through the Services; and (iii) you have the legal right and capacity to enter into this Agreement in your jurisdiction.
      You may not create, post, store or share any User Content that violates this Agreement or for which you do not have all the rights necessary to grant us the license described above. Although we have no obligation to screen, edit or monitor User Content, we may delete or remove User Content at any time and for any reason.
      dzook is not a backup service and you agree that you will not rely on the Services for the purposes of User Content backup or storage. dzook will not be liable to you for any modification, suspension, or discontinuation of the Services, or the loss of any User Content.

      <br/><br/><b>4. Prohibited Conduct and Content</b> <br/>
      You will not violate any applicable law, contract, intellectual property or other third-party right or commit a tort, and you are solely responsible for your conduct while accessing or using our Services. You will not:
      <ul>
        <li>Engage in any harassing, threatening, intimidating, predatory or stalking conduct;</li>
        <li>Use or attempt to use another user’s account without authorization from that user and dzook;</li>
        <li>Use our Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying our Services or that could damage, disable, overburden or impair the functioning of our Services in any manner;</li>
        <li>Reverse engineer any aspect of our Services or do anything that might discover source code or bypass or circumvent measures employed to prevent or limit access to any part of our Services;</li>
        <li>Attempt to circumvent any content-filtering techniques we employ or attempt to access any feature or area of our Services that you are not authorized to access;</li>
        <li>Develop or use any third-party applications that interact with our Services without our prior written consent, including any scripts designed to scrape or extract data from our Services;</li>
        <li>Use our Services for any illegal or unauthorized purpose, or engage in, encourage or promote any activity that violates this Agreement.</li>
      </ul>

      You may also only post or otherwise share User Content that is non-confidential and you have all necessary rights to disclose. You may not create, post, store or share any User Content that: <br/>

      <ul>
        <li>Is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing, threatening, invasive of privacy or publicity rights, abusive, inflammatory or fraudulent;</li>
        <li>Would constitute, encourage or provide instructions for a criminal offense, violate the rights of any party or otherwise create liability or violate any local, state, national or international law;</li>
        <li>May infringe any patent, trademark, trade secret, copyright or other intellectual or proprietary right of any party;</li>
        <li>Contains or depicts any statements, remarks or claims that do not reflect your honest views and experiences;</li>
        <li>Impersonates, or misrepresents your affiliation with, any person or entity;</li>
        <li>Contains any unsolicited promotions, political campaigning, advertising or solicitations;</li>
        <li>Contains any private or personal information of a third party without such third party’s consent;</li>
        <li>Contains any viruses, corrupted data or other harmful, disruptive or destructive files or content; or</li>
        <li>Is, in our sole judgment, objectionable or that restricts or inhibits any other person from using or enjoying our Services, or that may expose dzook or others to any harm or liability of any type.</li>
        <li>In addition, although we have no obligation to screen, edit or monitor User Content, we may delete or remove User Content at any time and for any reason.</li>
      </ul>

      <br/> <br/>
      <b>5. Limited License; Copyright and Trademark</b> <br/>
      Our Services and the text, graphics, images, photographs, videos, illustrations, trademarks, trade names, page headers, button icons, scripts, service marks, logos, slogans, filters, user generated filters and other content contained therein (collectively, the “dzook Content”) are owned by or licensed to dzook and are protected under both United States and foreign laws. Except as explicitly stated in this Agreement, dzook and our licensors reserve all rights in and to our Services and the dzook Content. You are hereby granted a limited, nonexclusive, non transferable, non-sublicensable, revocable license to access and use our Services and dzook Content for your own personal use; however, such license is subject to this Agreement and does not include any right to: (a) sell, resell or commercially use our Services or dzook Content; (b) copy, reproduce, distribute, publicly perform or publicly display dzook Content, except as expressly permitted by us or our licensors; (c) modify the dzook Content, remove any proprietary rights notices or markings, or otherwise make any derivative uses of our Services or dzook Content, except as expressly set forth in this Agreement; (d) use any data mining, robots or similar data gathering or extraction methods; or (e) use our Services or dzook Content other than as expressly provided in this Agreement. Any use of our Services or dzook Content other than as specifically authorized herein, without our prior written permission, is strictly prohibited and will terminate the license granted under this Agreement. You will not remove, alter or conceal any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the dzook Content.

      <br/> <br/>
      <b>6. Feedback</b> <br/>
      Any questions, comments, suggestions, ideas, original or creative materials or other information you submit about dzook or our products or Services (collectively, “Feedback”), is non-confidential and we have no obligations (including without limitation obligations of confidentiality) with respect to such Feedback. You hereby grant to dzook a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sublicensable right and license to use, reproduce, perform, display, distribute, adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights, in connection with the operation and maintenance of the Services and/or dzook’s business.

      <br/> <br/>
      <b>7. Copyright Complaintsb </b> <br/>
      We have a policy of limiting access to our Services and terminating the accounts of users who repeatedly infringe the intellectual property copyright rights of others upon prompt notification to us by the copyright owner or the copyright owner’s legal agent.

      <br/> <br/>
      <b>8. Indemnification </b> <br/>
      To the fullest extent permitted by applicable law, you will indemnify, defend, and hold harmless dzook and each of our respective officers, directors, agents, partners and employees (individually and collectively, the “dzook Parties”) from and against any loss, liability, claim, demand, damages, expenses or costs (“Claims”) arising out of or related to (a) your access to or use of our Services; (b) your User Content or Feedback; (c) your violation of this Agreement; (d) your violation, misappropriation or infringement of any rights of another (including intellectual property rights or privacy rights); or (e) your conduct in connection with our Services. You agree to promptly notify dzook Parties of any third party Claims, cooperate with dzook Parties in defending such Claims and pay all fees, costs and expenses associated with defending such Claims (including, but not limited to, attorneys’ fees). You also agree that the dzook Parties will have control of the defense or settlement of any third party Claims. This indemnity is in addition to, and not in lieu of, any other indemnities set forth in a written agreement between you and dzook or the other dzook Parties.

      <br/> <br/>
      <b>9. Disclaimers </b> <br/>
      We do not control, endorse or take responsibility for any User Content or third-party content available on or linked to by our Services.
      YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK. OUR SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. In addition,dzook does not represent or warrant that our Services are accurate, complete, reliable, current or error-free. While dzook attempts to make your access to and use of our Services safe, we cannot and do not represent or warrant that our Services or servers are free of viruses or other harmful components. You assume the entire risk as to the quality and performance of the Services.

      <br/> <br/>
      <b>10. Limitation of Liability </b> <br/>
      DZOOK AND THE OTHER DZOOK PARTIES WILL NOT BE LIABLE TO YOU UNDER ANY THEORY OF LIABILITY WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, OR OTHERWISE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, PUNITIVE OR SPECIAL DAMAGES OR LOST PROFITS, EVEN IF DZOOK OR THE OTHER DZOOK PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      THE TOTAL LIABILITY OF DZOOK AND THE OTHER DZOOK PARTIES, FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR OUR SERVICES, REGARDLESS OF THE FORM OF THE ACTION, IS LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO ACCESS OR USE OUR SERVICES.
      The limitations set forth in this section will not limit or exclude liability for the gross negligence, fraud or intentional misconduct of dzook or the other dzook Parties or for any other matters in which liability cannot be excluded or limited under applicable law. Additionally, some jurisdiction does not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.

      <br/> <br/>
      <b>11. Release </b> <br/>
      To the fullest extent permitted by applicable law, you release dzook and the other dzook Parties from responsibility, liability, claims, demands, and/or damages (actual and consequential) of every kind and nature, known and unknown (including, but not limited to, claims of negligence), arising out of or related to disputes between users and the acts or omissions of third parties. <br/>
      <b>You expressly waive any rights you may have under California Civil Code § 1542 as well as any other statute or common law principles that would otherwise limit the coverage of this release to include only those claims which you may know or suspect to exist in your favor at the time of agreeing to this release.</b>

      <br/> <br/>
      <b>12. Transfer and Processing Data </b> <br/>
      By accessing or using our Services, you acknowledge and, as applicable, consent to the processing, transfer and storage of information about you in and to the United States and other countries.

      <br/> <br/>
      <b>13. Electronic Communications </b> <br/>
      By accessing or using the Services, you also consent to receive electronic communications from dzook (e.g., responses to your requests, questions and feedback, announcements, updates, and security alerts through a push notification or by posting notices on our Services). You agree that any notices, agreements, disclosures or other communications that we send to you electronically will satisfy any legal communication requirements, including, but not limited to, that such communications be in writing.

        <br/> <br/>
      <b>14. Termination </b> <br/>
      We reserve the right, without notice and in our sole discretion, to terminate your right to access or use our Services. We are not responsible for any loss or harm related to your inability to access or use our Services.

      <br/> <br/>
      <b>15. Severability </b> <br/>
      If any provision or part of a provision of this Agreement is unlawful, void or unenforceable, that provision or part of the provision is deemed severable from this Agreement and does not affect the validity and enforceability of any remaining provisions.

      <br/> <br/>
      <b>16. Additional Terms Applicable to iOS Devices</b> <br/>
      The following terms apply if you install, access or use the Services on any device that contains the iOS mobile operating system (the “App”) developed by Apple Inc. (“Apple”).

      <ul>
        <li>Acknowledgement. You acknowledge that this Agreement is concluded solely between us, and not with Apple, and dzook, not Apple, is solely responsible for the App and the content thereof. You further acknowledge that the usage rules for the App are subject to any additional restrictions set forth in the Usage Rules for the Apple App Store Terms of Service as of the date you download the App, and in the event of any conflict, the Usage Rules in the App Store shall govern if they are more restrictive. You acknowledge and agree that you have had the opportunity to review the Usage Rules.</li>
        <li>Scope of License. The license granted to you is limited to a non-transferable license to use the App on any iPhone, iPod touch or iPad that you own or control as permitted by the Usage Rules set forth in the Apple App Store Terms of Service.</li>
        <li>Maintenance and Support. You and dzook acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App.</li>
        <li>Warranty. You acknowledge that Apple is not responsible for any product warranties, whether express or implied by law, with respect to the App. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any, paid to Apple for the App by you; and to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App. The parties acknowledge that to the extent that there are any applicable warranties, any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any such applicable warranty would be the sole responsibility of dzook. However, you understand and agree that in accordance with this Agreement, dzook has disclaimed all warranties of any kind with respect to the App, and therefore, there are no warranties applicable to the App.</li>
        <li>Product Claims. You and dzook acknowledge that as between Apple and dzook, dzook, not Apple, is responsible for addressing any claims relating to the App or your possession and/or use of the App, including, but not limited to (a) product liability claims, (b) any claim that the App fails to conform to any applicable legal or regulatory requirement, and (c) claims arising under consumer protection or similar legislation.</li>
        <li>Intellectual Property Rights. The parties acknowledge that, in the event of any third party claim that the App or your possession and use of the App infringe that third party’s intellectual property rights, dzook, and not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required under this Agreement.</li>
        <li>Legal Compliance. You represent and warrant that (a) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country, and (b) you are not listed on any U.S. Government list of prohibited or restricted parties.</li>
        <li>Developer Name and Address. Any questions, complaints or claims with respect to the App should be directed to: terms@dzook.ai</li>
        <li>Third-Party Terms of Agreement. You agree to comply with any applicable third-party terms when using the Services.</li>
        <li>Third-Party Beneficiary. The parties acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of this Agreement, and that, upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary thereof).</li>
      </ul>

        <br/> <br/>
      <b>17. Dispute Resolution </b> <br/>
      In the event a dispute cannot be resolved through communications with dzook, you and we agree that any dispute, claim, or controversy arising out of or relating to the Terms, Privacy Policy, or Additional Terms, or your use of the dzook Services, shall be resolved through final and binding arbitration administered by the American Arbitration Association (“AAA”) under its Commercial Arbitration Rules.
    </div>*/}
    <Footer/>
  </div>
}

export default TermsOfUse;
