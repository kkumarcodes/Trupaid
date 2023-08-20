import React, { FunctionComponent, useState } from 'react';
import {
  Grid,
} from '@material-ui/core';
import Button from '../components/Button';
import Layout from "../components/Layout";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Faq from '../assets/images/others/faq.gif';

const Help: FunctionComponent = () => {
  return (
    <Layout>
      <section className=' datasection text-center'>
        <Grid container>
          <Grid item md={2} className=""></Grid>
          <Grid item md={8} className="">

            <img src={Faq} alt="logo" className="w-85" />
          </Grid>
          <Grid item md={2} className=""></Grid>

        </Grid>
      </section>
      <section className=''>
        <Grid container className='datasection'>
          <Grid item md={7} className="p-15">
            <h2>
            Still need help?
            </h2>
            <p>
            If you cannot find the answer to your question in our FAQ, you can always contact us.
            </p>
          </Grid>
          <Grid item md={5} className="">
            <p>&nbsp;</p>
          <Button>
                    Contact us
                  </Button>

          </Grid>
        </Grid>
      </section>

      <Grid>
        <header id="hero2" className="main-footer">
          <div className='row align-items-center text-left pb-5'>
            <Grid container>
              <Grid item md={2} className=""></Grid>
              <Grid item md={8} className="">
                <h1 className="">
                  Frequently asked questions
                </h1>
                <p className="">
                </p>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">How do I fix a failed transaction?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Log into your TruPaid account and ensure your financial accounts are connected or have sufficient balance. Receiving money from someone else? The sender will have an alert to retry the transfer when ready.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">Is TruPaid only for US adults?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes. While we support business owners or any person in the US with a social security number 18 years old or older, we cannot yet serve minors or connect to banks outside of the US yet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">I can't connect my bank or card. Help?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      If you are sure you are typing in the email and password correctly (not using face ID), then please let us know, and we'll see if we can help. Unfortunately, while Plaid helps us to connect to most banks in the US, they do not have 100% coverage.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">How do I fix a failed transaction?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Log into your TruPaid account and ensure your financial accounts are connected or have sufficient balance. Receiving money from someone else? The sender will have an alert to retry the transfer when ready.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">What is an automated transfer?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Automated bill splitting can either be on a fixed schedule or after the bill is paid. 'Fixed Monthly' requests transfer a predetermined amount on a fixed date with the option to send the remainder or deduct the remainder at the end of the month. (i.e., Sally sends Ron $10 for a bill on the 1st of the month. If her half of the bill turned out to be $15 after the bill was paid, she can send the remaining $5 at month end.) If you split bills 'After Bill is Paid', this means when a connected account is charged by the selected merchant, the split that others owe you is automatically calculated and transferred to pay you back. (i.e., if Ron agrees to pay 50% of the phone bill to Sally for the family plan, then any time Sally is charged by the phone company, Ron will transfer 50% of the total to Sally.)
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">Who is Astra Finance, Plaid, and Dwolla?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      TruPaid partners with Astra and Plaid to securely connect to your cards and banks. We work also with Dwolla to help enable bank transfers between your accounts or with others.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">Can I split a bill with someone not on TruPaid?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      When you send a request to someone not on the platform, we invite that person to join. For everyone's protection, we ask users to first validate their connection before they can send transfers.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">What happens if my balance is low?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      TruPaid does not want to overdraw your account and cause a overdraft fees, so if we think your recurring transfers will overdraw your account, we'll let you know and pause the transfer. Please know that while we have rule that uses your account balance from the night before to signal if your balance will go negative, we cannot predict if large transactions were made that day that take your account negative.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">Can I split a pending charge?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Right now, no. TruPaid waits for charges to fully settle and leave your account before splitting with others. Transaction amounts and even merchant names continue to shift until they are fully pulled out of your account.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">Why do you need so much detail on signup?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      TruPaid takes security very seriously. We apologize for all the verifications, but we refuse to let the fraudsters head to Disneyland using your hard-earned money. We therefore ensure we know we're speaking to the real you, that you have control of the account you are connecting, and we have a means of reaching you if something looks unusual.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">What do you do with my data?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Your personally identifiable information is yours and yours alone. We do NOT share your personal data or anything about you specifically to advertisers or the services you use/share. We do let people be searchable if someone types in your full email and phone number, but then you have the right to reject the connection.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">Am I allowed to share my service?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      TruPaid is a bill organizer and transfer service. While we provide some guidance from merchants on the New Services page, we do not inspect, monitor, or report individual sharing to anyone. That said, we ask you to please share responsibly as per the Terms of Service with each service provider. Remember that content providers need to feed their families too!
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">Can I get my transfer back?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      It depends. If you sent a transfer within the last 12 hours, we are likely able to stop the transfer and have it sent back to you. Please contact customer service and let us know which transfer you'd like to stop. If the transfer was sent more than 12 hours ago, you can always request the other person to send your money back. If they don't respond or are unwilling, please let us know anyways. We cannot force the recipient to return the money, but if we detect foul play, we absolutely can ban people from the platform and inform the authorities who might be able to help.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="">What does TruPaid cost?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      While TruPaid builds out a few new features in beta, the service is free. Organizing your accounts, tracking your bills, and moving money between your accounts will ALWAYS be free. Eventually, we will need to eat and will charge a small monthly fee to automate transfers and share bills with others. We hope you understand and love us anyways.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item md={2} className=""></Grid>
            </Grid>
          </div>
        </header>
      </Grid>

    </Layout>
  );
};

export default Help;
