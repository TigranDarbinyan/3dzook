import './Subscription.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { HashLink as Link } from 'react-router-hash-link'
import DOMPurify from "dompurify";

function Subscription({data}) {
  const pageHTMLContent = data && data[0] ? data[0].content : '';
  const safeHTML = DOMPurify.sanitize(pageHTMLContent);

  const getContent = () => {
    return <div className='subscription-container'>
      <div dangerouslySetInnerHTML={{ __html: safeHTML }} />
    </div>
  }

  return <div className="subscription">
    <Header/>
    {/*{getContent()}*/}
    <div className='subscription-container'>
      <p className='title'>About Subscription</p> <br/>
      <div>
        <b><Link to="/subscription#policies">1. Subscription Policies</Link></b> <br/>
        <b><Link to="/subscription#refund-policy">2. Refund Policy</Link></b> <br/>
        <b><Link to="/subscription#cancel-subscription">3. How To Cancel Subscription:</Link></b> <br/>
        &thinsp;&thinsp;&thinsp;&thinsp; <Link to="/subscription#cancel-ios">Cancel iOS Subscription</Link> <br/>
        &thinsp;&thinsp;&thinsp;&thinsp; <Link to="/subscription#cancel-android">Cancel Android Subscription</Link> <br/>

        <b><Link to="/subscription#find-order">4. Where can I find my order receipt?</Link></b> <br/> <br/>
      </div>
      <div>
        <div id="policies"><b>Subscription Policies</b><br/><br/></div>

        1.1. dzook app allows you to get certain features and functionality by the means of subscription model. dzook PRO is a paid subscription that gives you unlimited access to the custom made Art Styles, filters, effects.
        <br/><br/>
        1.2. dzook PRO offers a monthly subscription plan.
        <br/><br/>
        1.3. To subscribe for a subscription plan of dzook PRO, you should provide us with one or more Payment methods (your account in on of third party service such as Google Play or App Store).
        <br/><br/>
        1.4. Subscription for dzook PRO auto-renews at the cost of the chosen subscription plan, unless canceled 24 hours in advance prior to the end of then-current subscription term. Unless you cancel subscription before the billing date, you authorize dzook to charge the subscription fee to your Payment Method for the next billing cycle in accordance with conditions of chosen subscription plan.
        <br/><br/>
        1.5. From time to time dzook may offer special promotional subscription plans for dzook PRO. Special subscription plans may have differing conditions and limitations, which will be disclosed at your sign-up or in other communications made available to you.
        <br/><br/>
        1.6. We may change our subscription plans and the price of our service from time to time; however, any price changes or changes to your subscription plans will apply no earlier than 30 days following notice to you.
        <br/><br/>
        1.7. In the event of change in price for your subscription plan which you were duly informed of as provided in par. 1.6., new subscription price would be effective from the billing period following then-current subscription billing period.
        <br/><br/><br/>


        <b>Free Trials</b><br/><br/>

        2.1. Your subscription for dzook PRO may start with a Free trial. Free trial is intended to allow new members and certain former members to try the services provided as part of subscription for dzook PRO. The duration of the free trial term of your subscription will be specified during sign-up.
        <br/><br/>
        2.2. Free trial eligibility is determined by dzook at its sole discretion and we may limit eligibility or duration of Free trial's term in order to prevent abuse. We reserve the right to revoke the free trial and put your account on hold in the event that we determine that you are not eligible for the Free trial. We may use information such as device ID, method of payment or an account email address used with an existing or recent subscription for dzook PRO to determine eligibility for the Free trial. For combinations with other offers, restrictions may apply.
        <br/><br/>
        2.3. In order to receive access to the Free trial, you should make a subscription for dzook PRO. During the term of Free trial you will not be charged for use of dzook PRO while having access to the same functions which are normally provided exclusively as part of subscription for dzook PRO.
        <br/><br/>
        2.4. Once the terms of Free trial is over it will automatically convert into paid subscription (in accordance with the chosen subscription plan) if automatic renewal is enabled. In case automatic renewal is disabled within the last 24 hours of the trial the trial subscription won't be converted. Within the 24 hours time frame before your trial subscription ends the subscription fee will be charged to your Payment Method. Starting from this moment your subscription will automatically renew according to the pattern described above.
        <br/><br/>
        2.5. Subscription, chosen at the moment of activation of the Free trial term, could also be cancelled by you at any time prior to the final 24 hours of the Free trial term as provided at your sign-up.
        <br/><br/><br/>

        <b><div id='refund-policy'>Cancellation of subscription</div></b><br/><br/>

        3.1. In order to cancel a subscription for dzook PRO, please follow instructions of respective Payment method on cancellation of a subscription (for additional instructions on how to cancel a subscription in your third party service please see /Google Play, App Store, Google Answer).
        <br/><br/>
        3.2. Once your subscription is canceled, dzook PRO will be available to you until the end of billing period, and your subscription will not be renewed after then-current subscription term expires. The already started subscription period cannot be discontinued or cancelled.
        <br/><br/>

        <b>Closing provisions</b><br/><br/>

        4.1. Any reference in paragraphs 1.4, 2.4., 2.5. to a specific time shall refer to the time in the time zone where the you were located at the moment of commencement of the related event. (For example, a reference to cancellation of a subscription 24 hours in advance prior to the end of then-current subscription term means that 24 hours should be counted in the same time zone where you initially subscribed for your current subscription plan in dzook PRO).
        <br/><br/>
        4.2. By subscribing to dzook PRO you acknowledge that subscription for dzook PRO is available in more than one country, and that the currencies used by those countries may vary, and may fluctuate in value during the term of this Agreement. Please acknowledge that as dzook is not processing payment for the subscription, we rescind from any responsibility for the changes in subscription price resulting from reflection by Payment method of any fluctuations in the exchange rate.
        <br/><br/>
        4.3. Please acknowledge that as dzook is not processing payment for the subscription, we rescind from responsibility for
        <br/><br/>
        (i) any fees or commissions relating to processing of payment of subscription price,
        <br/><br/>
        (ii) any refusal of the payment method (including Payment methods as provided in par. 1.3. or any bank or credit organization used by you in order to process payment) to accept and/or process.
        <br/><br/>
        Any complaints regarding processing of payment should be filed to the respective Payment method, bank or financial institution through which the respective payment was made.
        <br/><br/>
        For any additional questions, please, contact support@dzook.ai.
        <br/><br/><br/>


        If you subscribed to dzook PRO through the App Store (iOS) or Google Play (Android) and need a refund, please contact them directly. dzook cannot refund purchases made through the App Store or Google Play.
        <br/><br/>

        <b><div id="cancel-subscription">How To Cancel Subscription</div></b><br/><br/>


        <b><div id="cancel-ios">Cancel iOS Subscription:</div></b><br/>
        To cancel your dzook PRO subscription on App Store,
        <br/><br/>
        Since all purchases are processed directly by the App Store, we don't have any access to our users' accounts and cannot cancel their subscriptions. You can cancel your subscription yourself via your Apple ID.
        Go to Settings > your Apple ID.
        Go to Subscriptions.
        Tap on dzook subscription.
        Tap on "Cancel subscription". You're all set!
        <br/><br/>
        If you cancel your subscription during your free trial, you’ll retain access to all the premium features until your free trial period is over.
        Canceling a subscription does not make you eligible for a refund.
        You'll still be able to use dzook app using the free basic version.
        *Please note that deleting the app doesn't automatically cancel the subscription.
        <br/><br/>
        Where can I find my order receipt?
        <br/><br/>
        If you subscribed to dzook PRO through the App Store, you should receive an order receipt to your email address sent by the store you purchased from.
        <br/><br/>

        <b><div id='cancel-android'>Cancel Android subscription:</div></b><br/>

        To cancel your dzook PRO subscription on Google Play;
        <br/><br/>
        Since all purchases are processed directly by Google Play, we don't have any access to our users' accounts and cannot cancel their subscriptions. You can cancel your subscription yourself via Google Play.
        Open Google Play and check that you are signed into the account you made a subscription with.
        Go to Menu > Subscriptions.
        Find dzook subscription and tap on it.
        Tap "Cancel subscription" at the bottom of the screen.
        <br/><br/>
        If you cancel your subscription during your free trial, you’ll retain access to all the premium features until your free trial period is over.
        Canceling a subscription does not make you eligible for a refund.
        You'll still be able to edit and create with dzook using the free basic version.
        *Please note that deleting the app doesn't automatically cancel the subscription.
        <br/><br/>
        <b><div id='find-order'>Where can I find my order receipt?</div></b>
        <br/><br/>
        If you subscribed to dzook PRO through Google Play, you should receive an order receipt to your email address sent by the store you purchased from.

      </div>
    </div>
    <Footer/>
  </div>
}

export default Subscription;
