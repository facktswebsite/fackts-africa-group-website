import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: { absolute: "Terms of Use & Participation | FACKTS Africa Group" },
  description:
    "Terms governing use of FACKTS Africa websites, public platforms, events, competitions, creator activities, media and partner pathways.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal / terms"
      title="TERMS OF USE & PARTICIPATION."
      intro="These terms set the baseline rules for using FACKTS websites and public platform surfaces and for participating in FACKTS events, programmes, competitions and content activity. Project-specific agreements may add further terms."
      updated="16 September 2026"
    >
      <section>
        <h2>1. Scope</h2>
        <p>
          These Terms apply to public FACKTS Africa Group websites and to the
          FACKTS-controlled parts of FACKTS Hoops, FACKTS Music, FACKTS
          experiences, events, competition activity, public profiles, recordings,
          creator programmes and partnership pathways. A separate contract,
          competition rulebook, booking slip, licence, release form or project
          agreement may apply to a specific activity. If a specific written
          agreement conflicts with these general Terms, the specific agreement
          governs that activity to the extent permitted by law.
        </p>
      </section>

      <section>
        <h2>2. Participation, age and minors</h2>
        <p>
          You must provide accurate information where FACKTS reasonably needs it
          to administer an event, profile, competition, creator project or service.
          A parent or legal guardian must provide required permission for a minor.
          FACKTS may apply additional safeguarding, identity or age-verification
          steps where children are involved, and decisions involving children must
          be approached with their rights and best interests in mind.
        </p>
      </section>

      <section>
        <h2>3. Event and competition rules</h2>
        <p>
          Participants must follow the event-specific rules, safety instructions,
          venue requirements, official decisions and codes of conduct published or
          communicated for that activity. FACKTS may refuse or end participation
          where conduct threatens safety, fairness, property, another participant's
          rights or the proper operation of the event.
        </p>
      </section>

      <section>
        <h2>4. Photography, video, audio and interviews</h2>
        <p>
          Attendance at a FACKTS activity is not treated as unlimited permission
          to use a person's identity forever. Where recording is planned, FACKTS
          should give appropriate notice. Where consent is the lawful basis for an
          identifiable or featured use, consent should be specific to the stated
          purpose and handled in line with the <a href="/consent">Media & Recording Consent Policy</a>.
          Contracted performers, creators, players, hosts and contributors may have
          separate written media and usage terms.
        </p>
      </section>

      <section>
        <h2>5. Intellectual property and creator rights</h2>
        <p>
          FACKTS names, logos, site design, software, original editorial material
          and FACKTS-owned productions remain protected by applicable intellectual
          property law. Creators, performers, producers, photographers and other
          contributors retain rights they have not validly assigned or licensed.
          Giving permission to use an image, voice or interview does not by itself
          transfer music copyright, publishing rights, master ownership, beat
          ownership or performer rights. Those rights require the relevant licence
          or written agreement.
        </p>
      </section>

      <section>
        <h2>6. Material you submit</h2>
        <p>
          Do not upload or submit content you do not have the right to share.
          Where you provide FACKTS with a photograph, video, logo, beat, song,
          artwork, profile text, statistics or other material, you confirm that you
          have the authority needed for the specific submission and use you are
          requesting. Any broader commercial or public use will depend on the
          applicable project terms, licence or lawful basis.
        </p>
      </section>

      <section>
        <h2>7. Partner organisations and third-party services</h2>
        <p>
          FACKTS works with independent partners across areas such as gear,
          governance and risk, music infrastructure, rehabilitation and insurance.
          Displaying a partner does not create common ownership or make one
          organisation the agent of another. A partner's own service, contract,
          clinical care, marketplace, insurance product, website or data processing
          remains subject to that partner's own terms and responsibilities unless a
          joint written arrangement states otherwise.
        </p>
      </section>

      <section>
        <h2>8. Health, rehabilitation and insurance</h2>
        <p>
          FACKTS is not a healthcare provider or insurer. Health and rehabilitation
          services must be provided by the relevant qualified provider, and
          insurance cover is subject to the applicable insurer, intermediary,
          policy wording, underwriting and claims process. FACKTS content or event
          information should not be treated as medical, rehabilitation, insurance,
          legal or financial advice.
        </p>
      </section>

      <section>
        <h2>9. Acceptable digital use</h2>
        <p>
          Do not attempt unauthorised access, scrape restricted information,
          interfere with FACKTS systems, bypass security controls, impersonate
          another user, introduce malicious code, misuse credentials or disrupt a
          FACKTS platform. We may restrict access and preserve relevant records
          where reasonably necessary to protect users, systems, rights or comply
          with law.
        </p>
      </section>

      <section>
        <h2>10. Accuracy, availability and fair representation</h2>
        <p>
          FACKTS aims to keep public information accurate, but live records,
          schedules, statistics, creator information and event details can change.
          We may correct errors or update information. We do not intentionally
          claim sponsorship, approval, affiliation, results or partner authority
          that does not exist. Where third-party information is displayed, it may
          also be subject to correction by the relevant source.
        </p>
      </section>

      <section>
        <h2>11. Bookings, payments and commercial projects</h2>
        <p>
          A public webpage does not by itself create a binding booking or commercial
          commitment. Scope, price, deliverables, rights, payment milestones,
          cancellation, taxes and responsibilities should be set out in the booking
          or project document applicable to the engagement.
        </p>
      </section>

      <section>
        <h2>12. Privacy and data protection</h2>
        <p>
          Personal data is handled under our <a href="/privacy">Privacy & Data Protection Notice</a>.
          Where processing relies on consent, consent can be withdrawn subject to
          the lawfulness of processing that occurred before withdrawal and any
          other lawful basis that may apply.
        </p>
      </section>

      <section>
        <h2>13. Responsibility and limitation</h2>
        <p>
          FACKTS will not use these Terms to exclude rights or liabilities that
          Kenyan law does not allow to be excluded. To the extent permitted by law,
          FACKTS is not responsible for losses caused solely by independent partner
          services, third-party platforms, user misconduct or circumstances outside
          reasonable control. Event-specific risks and responsibilities may be
          addressed in separate rules, releases, insurance arrangements and
          contracts.
        </p>
      </section>

      <section>
        <h2>14. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of Kenya. Where a dispute arises,
          the parties should first attempt a good-faith written resolution. Any
          mediation, arbitration, tribunal or court process will depend on the
          relevant contract and applicable Kenyan law.
        </p>
      </section>

      <section>
        <h2>15. Contact</h2>
        <p>
          Questions about these Terms can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
