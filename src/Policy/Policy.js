import './Policy.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import DOMPurify from "dompurify";
import {HashLink as Link} from "react-router-hash-link";

function Policy({data}) {
  const pageHTMLContent = data && data[0] ? data[0].content : '';
  const safeHTML = DOMPurify.sanitize(pageHTMLContent);

  const getContent = () => {
    return <div className='policy-container'>
      <div dangerouslySetInnerHTML={{ __html: safeHTML }} />
    </div>
  }

  return <div className="policy">
    <Header/>
    <div className='policy-container'>
      {/*{getContent()}*/}
      <p className='title'>
        PRIVACY POLICY /
        <Link to="/policy#end-license"> END-USER LICENSE AGREEMENT</Link>
      </p>
      <p className="content">
        Effective as of  11.11.2020
        <br/><br/>
        <b>3dzook Inc.</b>
        <br/><br/>
        Attn: Legal – Privacy
        <br/><br/>
        2035 Sunset Lake Road, Suite B-2, Newark, Delaware 19702, USA
        <br/><br/>
        Welcome to dzook app’s  Privacy Policy!
        <br/><br/>
        Thank you for choosing to be part of our community at 3dzook, Inc. doing business as dzook  (<b>“dzook”</b>, <b>“we”</b>, <b>“us”</b>, or <b>“our”</b>). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at privacy@dzook.ai.
        <br/><br/><br/><br/>
        <b>Welcome to dzook’s Privacy Policy!</b><br/><br/>
        If you decide not to read this entire Privacy Policy, we want you to walk away with a few key points about dzook’s privacy practices:
        <ul>
          <li>The App is an illustrated portrait and video animation creator that allows users to convert simple photos or videos to cartoonish illustrations using filters and features based on our AI algorithm technology that automatically generates illustrated portraits and video animations.</li><br/>
          <li>Due to the limited processing resources available on mobile devices, we use a third-party cloud provider – specifically, Amazon Web Services – to process and transform photographs.</li><br/>
          <li>The App only uploads to the cloud the photographs and videos that you specifically select for editing. Photographs and videos remain in the cloud for a limited period of 48 hours after they are automatically deleted from the cloud.</li><br/>
          <li>We do not use the photographs and videos you provide when you use the App for any reason other than to provide you with the portrait and video converting functionality of the App.</li>
        </ul><br/>
        If you have any questions about our privacy practices, please email privacy@dzook.ai.
        <br/><br/>
        <b>Personal Information We Collect</b> <br/> <br/>
        We collect information that you voluntarily provide to us. For example, we collect your name, email address, username, social network information and other information you provide us when you register, set up an account, contact us by e-mail or use our services. We may also obtain information from other companies and combine that with information we collect on the dzook; for example, when you link your account with Google or Apple ID we might have access to your name.<br/><br/>
        <b>Photographs, Videos you provide when you use the App,</b>via your camera or camera roll (if you have granted us permission to access your camera or camera roll). We obtain only the specific images, videos you chose to modify using the App; we do not collect your photo albums even if you grant us your access to them. This means that the only device that can view the photo is the device from which the photograph was uploaded using the App – the user’s device. Please note that while we do not require or request any metadata attached to the photographs you upload, metadata (including, for example, geotags) may be associated with your photographs by default. We don’t store your EXIF metadata.<br/><br/>
        <b>App usage information,</b>such as information about how you use the App and interact with us, the date and time when you first installed the App, and the date and time you last used the App.<br/><br/>
        <b>Device data,</b>such as your computer and mobile device operating system type and version number, manufacturer and model, device ID, push tokens, Google Advertising ID, Apple ID for Advertising, browser type, screen resolution, IP address (and the associated country in which you are located), the website you visited before visiting our Site; and other information about the device you are using to visit the App<br/><br/>
        <b>Online activity data,</b> such as information about your use of and actions on the App and the Sites, including pages or screens you viewed, how long you spent on a page or screen, navigation paths between pages or screens, information about your activity on a page or screen, access times, and length of access.<br/><br/>
        <br/>
        <b>How We Use Your Personal Information</b><br/><br/>
        We do not use the photographs, videos you provide when you use the App for any reason other than to provide you with the portrait convertor functionality of the App. We may use the information other than photographs for the following purposes:<br/><br/>
        <b> To operate and improve the App:</b><br/>
        <ul>
          <li>Enable you to use the App’s features;</li>
          <li>Communicate with you about the App, including by sending you announcements, updates, and security alerts, which we may send through a push notification, and responding to your requests, questions, and feedback;</li>
          <li>Provide technical support and maintenance for the App;</li>
          <li>Perform statistical analysis about use of the App (including through the use of Google Analytics);</li>
        </ul><br/>
        <b>To send you marketing and promotional communications.</b>  We may send you marketing communications as permitted by law. You will have the ability to opt-out of our marketing and promotional communications as described in the Opt-out of marketing section below.<br/><br/>
        <b>For compliance, fraud prevention, and safety.</b> We may use your personal information and disclose it to law enforcement, government authorities, and private parties as we believe necessary or appropriate to: (a) protect our, your or others’ rights, privacy, safety or property (including by making and defending legal claims); (b) enforce the terms and conditions that govern the Service; and (c) protect, investigate and deter against fraudulent, harmful, unauthorized, unethical or illegal activity. <br/><br/>
        <b>With your consent.</b> In some cases, we may specifically ask for your consent to collect, use, or share your personal information, such as when required by law. <br/> <br/>
        <b>How We Share Your Personal Information</b><br/>
        We do not disclose user photographs, videos to third parties (with the exception of uploading an image to our cloud Amazon Web Services to provide the photo, video converter features of the App). We may share your non-photograph information in the following circumstances:<br/> <br/>
        <b>Affiliates.</b> We may share App usage information with our subsidiaries and affiliates, for purposes consistent with this Privacy Policy.<br/> <br/>
        <b>Service providers.</b>  We may share your personal information with service providers that perform services on our behalf or help us operate the App (such as customer support, hosting, analytics, email delivery, marketing, and database management services). These third parties may use your personal information only as directed or authorized by us and in a manner consistent with this Privacy Policy and are prohibited from using or disclosing your information for any other purpose.<br/><br/>
        <b>Advertising partners.</b> When we use third-party cookies and other tracking tools, our advertising partners may collect information from your device to help us analyze use of the Site and the App, display advertisements on the App, and advertise the Site and App (and related content) elsewhere online.<br/> <br/>
        <b>Professional advisors.</b> We may disclose your personal information to professional advisors, such as lawyers, bankers, auditors, and insurers, where necessary in the course of the professional services that they render to us.<br/>
        For compliance, fraud prevention, and safety. We may share your personal information for the compliance, fraud prevention, and safety purposes described above.<br/> <br/>
        <b>Business transfers.</b> We may sell, transfer or otherwise share some or all of our business or assets, including your personal information, in connection with a business transaction (or potential business transaction) such as a corporate divestiture, merger, consolidation, acquisition, reorganization or sale of assets, or in the event of bankruptcy or dissolution. <br/> <br/>
         <br/> <b>Compliance with Law</b>
        We may be required to use and share your personal information to comply with applicable laws, lawful requests, and legal processes, such as to respond to subpoenas or requests from government authorities.<br/> <br/>
        <b>Your Choices</b>
        In this section, we describe the rights and choices available to all users. Users who are located within European can find additional information about their rights below.<br/> <br/>
        <b>Opt-out of marketing communications and other push notifications.</b> You may opt-out of marketing-related communications and other notifications we may send you via a push notification by changing the settings on your mobile device. <br/> <br/>
        <b>Device permissions.</b> You may revoke any permissions you previously granted to us, such as permission to access your camera or camera roll, through the settings on your mobile device.
        You may request that we remove your information, including photographs, from the cloud before the 48 hour period after Amazon Web Services automatically deletes the information by e-mail us at privacy@dzook.ai.<br/> <br/>
        <b>Cookies & Browser Web Storage.</b> <br/> <br/> Most browsers let you remove or reject cookies. To do this, follow the instructions in your browser settings. Many browsers accept cookies by default until you change your settings. Please note that if you set your browser to disable cookies, the Site may not work properly. Similarly, your browser settings may allow you to clear your browser web storage. <br/> <br/>
        <b>Targeted online advertising.</b> <br/> <br/> We may partner with ad networks and other ad serving providers (“Advertising Providers”) that serve ads on behalf of us and others on non-affiliated platforms. Some of those ads may be personalized, meaning that they are intended to be relevant to you based on information Advertising Providers collect about your use of the Site and other sites or apps over time, including information about relationships among different browsers and devices. This type of advertising is known as interest-based advertising.
        Site users may opt-out of receiving targeted advertising on websites through members of the Network Advertising Initiative by clicking here or the Digital Advertising Alliance by clicking here. App users may opt-out of receiving targeted advertising in mobile apps through participating members of the Digital Advertising Alliance by installing the AppChoices mobile app, available here, and selecting the user’s choices. Please note that we also may work with companies that offer their own opt-out mechanisms and may not participate in the opt-out mechanisms that we linked above. <br/> <br/>
        <b>How Long We Retain Your Information</b>  <br/> <br/>
        We configure Amazon Web Services to delete photographs and the information associated with the photographs and videos within 48 hours.
        Your account information is retained while your account is active, unless you request us to delete it or remove your account. In case you deactivate/delete your account or request us to delete your information, some information may still be retained for a reasonable time to enhance your reactivation in case you decide to return to our services. We may also retain some information we believe in good faith is necessary for legal and regulatory compliance, research and development, business matters, and improvement of our Services.<br/>
        You may request that we remove your information, including photographs, from the cloud before the 48 hour period after Amazon Web Services automatically deletes the information by e-mail us at privacy@dzook.ai.<br/> <br/>
        <b>Children</b> <br/>  <br/>
        The App is not directed at children under the age of 13, and our Terms of Use do not allow children under 13 years of age to use the App. If we learn that we have collected personal information of a child under the age of 13, we will delete it. We encourage parents with concerns to contact us. <br/> <br/>
        <b>Changes to the Privacy Policy</b> <br/> <br/>
        We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the App. We may, and if required by law, will provide notification of changes in another way that we believe is reasonably likely to reach you, such as through the App. <br/>
        Any modifications to this Privacy Policy will be effective upon our posting the new terms and/or upon implementation of the new changes on the App (or as otherwise indicated at the time of posting). In all cases, your continued use of the App after the posting of any modified Privacy Policy indicates your acceptance of the terms of the modified Privacy Policy. <br/> <br/>
        <br/><b>How to Contact Us</b> <br/> <br/> <br/>
        <b>Please direct any questions or comments about this Policy or privacy practices to </b> privacy@dzook.ai. <br/> <br/>
        <b>Notice to European Users</b>
        The information provided in this “Notice to European Users” section applies only to individuals who reside in Europe. <br/> <br/>
        <b>Personal information.</b> References to “personal information” in this Privacy Policy are equivalent to “personal data” governed by European data protection legislation.<br/> <br/>
        <b>Legal bases for processing.</b> We use your personal information only as permitted by law. Our legal bases for processing the personal information described in this Privacy Policy are described in the table below. <br/> <br/>
        <b>To operate and improve the App.</b> Processing is necessary to perform the contract governing our provision of services in connection with the App. <br/> <br/>
        <b>To send you marketing and promotional communications.</b> <br/> <br/>
        <b>To display advertisements to you.</b> <br/> <br/>
        <b>For compliance, fraud prevention, and safety.</b> <br/> <br/>
        These activities constitute our legitimate interests. We do not use your personal information for these activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). <br/> <br/>
        <b>Compliance with Law</b> Processing is necessary to comply with our legal obligations. <br/> <br/>
        <b>With your consent</b> <br/>  <br/>
        Processing is based on your consent. Where we rely on your consent you have the right to withdraw it any time in the manner indicated when you consent or in the App. <br/> <br/>
        <b>Your rights</b> <br/>  <br/>
        European data protection laws give you certain rights regarding your personal information. If you are located within the European Union, you may ask us to take the following actions in relation to your personal information that we hold: <br/>
        <br/>  <b>Access.</b> <br/>  <br/>
        Provide you with information about our processing of your personal information and give you access to your personal information. <br/>
        <br/>  <b>Correct.</b> <br/>  <br/> Update or correct inaccuracies in your personal information. <br/>
        <br/>  <b>Delete.</b> <br/> <br/>   Delete your personal information. <br/>
        <br/>  <b>Transfer.</b> <br/> <br/>   Transfer a machine-readable copy of your personal information to you or a third party of your choice. <br/>
        <br/>  <b>Restrict.</b> <br/>  <br/>  Restrict the processing of your personal information. <br/>
        <br/>   <b>Object.</b> <br/>  <br/> Object to our reliance on our legitimate interests as the basis of our processing of your personal information that impacts your rights. <br/>
        You may submit these requests by email to gdpr@dzook.ai. <br/> <br/>
        Notice to California Residents <br/> <br/>
        We are required by the California Consumer Privacy Act of 2018 (“CCPA”) to provide to California residents an explanation of how we collect, use, and share their personal information, and of the rights and choices, we offer California residents regarding our handling of their personal information. <br/>
        We do not sell personal information. As we explain in this Privacy Policy, we use cookies and other tracking technologies to analyze Site and App traffic and use and to facilitate advertising. <br/> <br/>
        In addition to disclosures of personal information to our service providers and professional advisors, for compliance, fraud prevention and safety, and in connection with a business transfer, as described in the “How We Share Your Personal Information” section of the Privacy Policy. <br/> <br/>
        <b>California Residents’ Privacy Rights</b> <br/> <br/>
        <ul>
          <li>
            <b>Right to know what personal information we collect.</b> You have the right to request details on the specific personal information we’ve collected about you. We provide this information in our Privacy Policy, but you can also get this information by contacting us at privacy@dzook.ai. <br/> <br/>
          </li>
          <li>
            <b>Right to know who we share your data with.</b> We do not sell personal information. As we explain in this Privacy Policy, we use cookies and other tracking technologies to analyze Site and App traffic and use and to facilitate advertising. <br/> <br/>
          </li>
          <li>
            <b>Right to deletion.</b> You have the right to request the deletion of your data.  You may request that we remove your information, including photographs, from the cloud before the 48 hour period after Amazon Web Services automatically deletes the information by e-mail us at privacy@dzook.ai. <br/> <br/>
          </li>
          <li>
            <b>Get a timely response.</b> You have the right to make two free requests in any 12-month period. We will respond to your request within 45 days, and in more difficult cases we may extend our response time by another 45 days. <br/>
          </li>
        </ul> <br/>
        <b>How to Submit a Request</b><br/> <br/>
        To request access to or deletion of personal information please email us at privacy@dzook.ai.
      </p>

      <div id="end-license">
        END-USER LICENSE AGREEMENT

        Updated at 2021-10-15



        dzook hereby grants you access to  (“the Website”) and invites you to purchase the services offered here.



        Definitions and key terms

        To help explain things as clearly as possible in this Eula, every time any of these terms are referenced, are strictly defined as:

        -Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.

        -Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to 3dzook Inc., 2035 Sunset Lake Road Suite B-2, Newark, Delaware that is responsible for your information under this Eula.

        -Country: where dzook or the owners/founders of dzook are based, in this case is United States.

        -Service: refers to the service provided by dzook as described in the relative terms (if available) and on this platform.

        -Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.

        -You: a person or entity that is registered with dzook to use the Services.



        Introduction

        This End User License Agreement (the “Agreement”) is a binding agreement between you (“End User”,“you” or “your”) and 3dzook Inc. (“Company”, “we”, “us” or “our”). This Agreement governs the relationship between you and us, and your use of the Company dzook. Throughout this Agreement, End User and Company may each be referred to as a “Party” or collectively, the “Parties”.

        If you are using the app on behalf of your employer or other entity (an “Organisation”) for whose benefit you utilise the app or who owns or otherwise controls the means through which you utilise or access the app, then the terms “End User”, “you”, and “your” shall apply collectively to you as an individual and to the Organisation. If you use, or purchase a license or to, the app on behalf of an Organisation, you hereby acknowledge, warrant, and covenant that you have the authority to 1) purchase a license to the app on behalf of the Organisation; 2) bind the Organisation to the terms of this Agreement.

        By downloading, installing, accessing, or using the app you: (a) affirm that you have all of the necessary permissions and authorisations to access and use the app; (b) if you are using the app pursuant to a license purchased by an organisation, that you are authorised by that organisation to access and use the app(c) acknowledge that you have read and that you understand this agreement; (d) represent that you are of sound mind and of legal age (18 years of age or older) to enter into a binding agreement; and (e) accept and agree to be legally bound by the terms and conditions of this agreement.



        If you do not agree to these terms, do not download, install, access, or use the software. if you have already downloaded the software, delete it from your computing device.

        The Application is licensed, not sold, to you by dzook for use strictly in accordance with the terms of this Agreement.



        License

        Subject to the terms of this Agreement and, if applicable, those terms provided in the License Agreement, dzook grants you a limited, non-exclusive, perpetual, revocable, and non-transferable license to:

        (a) download, install and use the Software on one (1) Computing Device per single user license that you have purchased and been granted. If you have multiple Computer Devices in which you wish to use the Software, you agree to acquire a license for the number of devices you intend to use;

        (b) access, view, and use on such Computing Device the End User Provided Materials made available in or otherwise accessible through the Software, strictly in accordance with this Agreement, and any other terms and conditions applicable to such End User Provided Materials;

        (c) install and use the trial version of the Software on any number of Computing Devices for a trial period of fifteen (15) unique days after installation.

        (d) receive updates and new features that become available during the one (1) year period from the date on which you purchased the license to the Software.



        Restrictions

        You agree not to, and you will not permit others to:

        -License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the Application or make the Application available to any third party.

        -Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the Application.

        -Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of dzook or its affiliates, partners, suppliers or the licensors of the Application.



        Intellectual Property

        All intellectual property rights, including copyrights, patents, patent disclosures and inventions (whether patentable or not), trademarks service marks, trade secrets, know-how and other confidential information, trade dress, trade names, logos, corporate names and domain names, together with all of the good will associated there with, derivative works and all other rights (collectively, “Intellectual Property Rights”) that are part of the Software that are otherwise owned by dzook shall always remain the exclusive property of dzook (or of its suppliers or licensors, if and when applicable). Nothing in this Agreement grants you (or any Organisation) a license to dzook."’s" Intellectual Property Rights.

        You agree that this is Agreement conveys a limited license to use dzook."’s" Intellectual Property Rights, solely as part of the Software (and not independently of it), and only for the effective Term of the license granted to you hereunder. Accordingly, your use of any of dzook."’s" Intellectual Property Rights independently of the Software or outside the scope of this Agreement shall be considered an infringement of dzook."’s" Intellectual Property Rights. This shall not limit, however, any claim dzook may have for a breach of contract in the event you breach a term or condition of this Agreement. You shall use the highest standard of care to safeguard all Software (including all copies thereof) from infringement, misappropriation, theft, misuse or unauthorised access. Except as expressly granted in this Agreement, dzook reserves and shall retain all rights, title, and interest in the Software, including all copyrights and copyrightable subject matter, trademarks and trademark able subject matter, patents and patentable subject matter, trade secrets, and other intellectual property rights, registered, unregistered, granted, applied-for, or both now in existence or that may be created, relating to the thereto.



        You (or the Organisation, if and as applicable) shall retain ownership of all Intellectual Property Rights in and to the work products that you create through or with the assistance of the Software.



        Your Suggestions

        Any feedback, comments, ideas, improvements or suggestions (collectively, "Suggestions") provided by you to dzook with respect to the Application shall remain the sole and exclusive property of dzook.

        dzook shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.



        Modifications to Application

        dzook reserves the right to modify, suspend or discontinue, temporarily or permanently, the Application or any service to which it connects, with or without notice and without liability to you.



        Updates to Application

        dzook may from time to time provide enhancements or improvements to the features/ functionality of the Application, which may include patches, bug fixes, updates, upgrades and other modifications ("Updates").

        Updates may modify or delete certain features and/or functionalities of the Application. You agree that dzook has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the Application to you.

        You further agree that all Updates will be (i) deemed to constitute an integral part of the Application, and (ii) subject to the terms and conditions of this Agreement.



        Term and Termination

        This Agreement shall remain in effect until terminated by you or dzook.

        dzook may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.

        This Agreement will terminate immediately, without prior notice from dzook, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the Application and all copies thereof from your computer.

        Upon termination of this Agreement, you shall cease all use of the Application and delete all copies of the Application from your computer.

        Termination of this Agreement will not limit any of dzook."’s" rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.



        Indemnification

        You agree to indemnify, defend and hold harmless dzook and its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including reasonable attorneys’ fees, arising from or relating to: i) your use or misuse of the Software; ii) your failure to comply with any applicable law, regulation, or government directive; iii) your breach of this Agreement; or iv) your agreement or relationship with an Organisation (if applicable) or any third party. Furthermore, you agree that dzook assumes no responsibility for the information or content you submit or make available through this Software or the content that is made available to you by third parties.



        No Warranties

        The Application is provided to you "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, dzook, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Application, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, dzook provides no warranty or undertaking, and makes no representation of any kind that the Application will meet your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

        Without limiting the foregoing, neither dzook nor any dzook."’s" provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Application, or the information, content, and materials or products included thereon; (ii) that the Application will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Application; or (iv) that the Application, its servers, the content, or e-mails sent from or on behalf of dzook are free of viruses, scripts, trojan horses, worms, malware, time bombs or other harmful components.

        Some jurisdictions do not allow the exclusion of or limitations on implied warranties or the limitations on the applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to you.



        Limitation of Liability

        Notwithstanding any damages that you might incur, the entire liability of dzook and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the Application.

        To the maximum extent permitted by applicable law, in no event shall dzook or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the Application, third-party software and/or third-party hardware used with the Application, or otherwise in connection with any provision of this Agreement), even if dzook or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

        Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.



        Severability

        If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.



        Waiver

        No failure to exercise, and no delay in exercising, on the part of either party, any right or any power under this Agreement shall operate as a waiver of that right or power. Nor shall any single or partial exercise of any right or power under this Agreement preclude further exercise of that or any other right granted herein. In the event of a conflict between this Agreement and any applicable purchase or other terms, the terms of this Agreement shall govern.



        Amendments to this Agreement

        dzook reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

        By continuing to access or use our Application after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Application.



        Governing Law

        The laws of United States, excluding its conflicts of law rules, shall govern this Agreement and your use of the Application. Your use of the Application may also be subject to other local, state, national, or international laws.



        Changes to this agreement

        We reserve the exclusive right to make changes to this Agreement from time to time. Your continued access to and use of the app constitutes your agreement to be bound by, and your acceptance of, the terms and conditions posted at such time. You acknowledge and agree that you accept this Agreement (and any amendments thereto) each time you load, access, or use the app. Therefore, we encourage you to review this Agreement regularly.



        If, within thirty (30) days of us posting changes or amendments to this Agreement, you decide that you do not agree to the updated terms, you may withdraw your acceptance to the amended terms by providing us with written notice of your withdrawal. Upon providing us with the written notice of the withdrawal of your acceptance, you are no longer authorised to access or use the app.



        No Employment or Agency Relationship

        No provision of this Agreement, or any part of relationship between you and dzook, is intended to create nor shall they be deemed or construed to create any relationship between you and dzook other than that of and end user of the app and services provided.



        Equitable Relief

        You acknowledge and agree that your breach of this Agreement would cause dzook irreparable harm for which money damages alone would be inadequate. In addition to damages and any other remedies to which dzook may be entitled, you acknowledge and agree that we may seek injunctive relief to prevent the actual, threatened or continued breach of this Agreement.



        Headings

        The headings in this Agreement are for reference only and shall not limit the scope of, or otherwise affect, the interpretation of this Agreement.



        Geographic Restrictions

        The Company is based in United States and provided for access and use primarily by persons located in United States, and is maintains compliance with United States laws and regulations. If you use the app from outside United States, you are solely and exclusively responsible for compliance with local laws.



        Limitation of Time to File Claims

        Any cause of action or claim you may have arising out of or relating to this agreement or the app must be commenced within one (1) year after the cause of action accrues, otherwise, such cause of action or claim is permanently barred.



        Entire Agreement

        The Agreement constitutes the entire agreement between you and dzook regarding your use of the Application and supersedes all prior and contemporaneous written or oral agreements between you and dzook.

        You may be subject to additional terms and conditions that apply when you use or purchase other dzook."’s" services, which dzook will provide to you at the time of such use or purchase.



        Contact Us

        Don't hesitate to contact us if you have any questions about this Agreement.

        -Via Email:  support@dzook.ai
      </div>

    </div>
    <Footer/>
  </div>
}

export default Policy;
