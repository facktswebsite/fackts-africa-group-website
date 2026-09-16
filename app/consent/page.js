import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: { absolute: "Media & Recording Consent | FACKTS Africa Group" },
  description:
    "FACKTS Africa media, photography, video, audio and recording consent policy for events, players, creators, interviews and minors in Kenya.",
  alternates: { canonical: "/consent" },
};

const consentFlow = [
  ["01", "NOTICE", "Tell people recording is planned and the main intended uses."],
  ["02", "CHOICE", "Where consent is the basis, make the choice clear and separate from unrelated registration."],
  ["03", "CAPTURE", "Record only within the communicated scope and respect practical opt-outs."],
  ["04", "PUBLISH", "Use identifiable media for the stated purpose, channels and project context."],
  ["05", "RESPOND", "Handle withdrawal, takedown, correction and rights requests responsibly."],
];

export default function ConsentPage() {
  return (
    <LegalLayout
      eyebrow="Legal / media consent"
      title="NOTICE FIRST. CAMERA SECOND."
      intro="FACKTS records real courts, studios, creators, players, communities and cultural moments. This policy sets a practical consent standard for photography, video, audio, interviews and other identifiable recorded media."
      updated="16 September 2026"
    >
      <div className="consent-flow">
        {consentFlow.map(([n, title, copy]) => (
          <div key={n}>
            <span>{n}</span><strong>{title}</strong><p>{copy}</p>
          </div>
        ))}
      </div>

      <section>
        <h2>1. The baseline rule</h2>
        <p>
          FACKTS should not rely on hidden or vague permission for identifiable
          media. When photography, video or audio is planned, people should receive
          clear notice. Where consent is the lawful basis, the person should know
          who is recording, the purpose, the type of media, intended public use,
          relevant third-party sharing and how to withdraw consent.
        </p>
      </section>

      <section>
        <h2>2. Event notice</h2>
        <p>
          Recording notices may appear during registration, on event publicity,
          programmes, signage or at entry points. A notice should say that
          photography, video or audio may take place and may be published on FACKTS
          websites, platforms, social channels, partner deliverables or archives as
          applicable to the event. Where individual consent is the chosen basis,
          the consent mechanism should be distinct from general event registration.
        </p>
      </section>

      <section>
        <h2>3. Featured people versus general event capture</h2>
        <p>
          Close-up portraits, interviews, player features, creator profiles,
          documentary segments and other participant-focused content should receive
          the level of permission appropriate to their use. FACKTS does not treat
          simple attendance as blanket permission for every future commercial use.
          Large crowd or general atmosphere capture may involve a different lawful
          basis, but it still requires appropriate privacy assessment and notice.
        </p>
      </section>

      <section>
        <h2>4. Practical opt-out</h2>
        <p>
          Where appropriate for the event, FACKTS may use designated camera-free
          areas, identifiers, advance opt-out forms or a direct instruction to the
          production team. The method should be practical enough that a person can
          genuinely exercise the choice. Opting out of media should not be made
          unnecessarily difficult.
        </p>
      </section>

      <section>
        <h2>5. Children and minors</h2>
        <p>
          Identifiable recorded media involving a child requires particular care.
          Where required by law, a parent or legal guardian must consent before the
          child's personal data is processed. The guardian should be told how and
          where the image, audio or video may be used, including online publication.
          FACKTS should also consider the child's dignity, age, maturity, safety and
          best interests before publication.
        </p>
      </section>

      <section>
        <h2>6. What consent may cover</h2>
        <p>
          A project-specific consent may cover capture and use of a person's image,
          voice, likeness, interview or participation for specified purposes such as
          event coverage, documentary storytelling, public profiles, promotion,
          partner reporting, educational material or cultural archiving. The form or
          notice should identify the relevant purposes rather than using one
          unlimited phrase for unrelated uses.
        </p>
      </section>

      <section>
        <h2>7. Withdrawal</h2>
        <p>
          Where FACKTS relies on consent, consent may be withdrawn. Withdrawal does
          not invalidate processing that was lawful before the withdrawal. For
          future use, FACKTS should stop consent-based processing unless another
          lawful basis applies. Where FACKTS controls an online post and withdrawal
          requires removal, FACKTS should take reasonable steps to remove it. Printed
          material already distributed, third-party copies, reposts or historic
          material no longer under FACKTS control may not always be fully retrievable.
        </p>
      </section>

      <section>
        <h2>8. Paid talent, performers and contracted contributors</h2>
        <p>
          Where recording or publication is part of a written talent, production,
          service, appearance or performance agreement, that agreement may govern
          the authorised use. The contract should still be clear about scope,
          channels, duration, territory, edits, credit and compensation where these
          matters are relevant.
        </p>
      </section>

      <section>
        <h2>9. Image consent is not a music-rights transfer</h2>
        <p>
          A participant's permission to film or photograph them does not by itself
          transfer copyright in a song, beat, master, composition, artwork or
          performance. Music and performance rights require their own valid
          authorisation, licence, split documentation or contract as applicable.
        </p>
      </section>

      <section>
        <h2>10. Partner co-production</h2>
        <p>
          When a partner is involved in filming, distribution or a co-branded
          activation, the consent or privacy notice should explain relevant sharing
          or joint use. A FACKTS partnership is not automatic permission for every
          partner to reuse a person's media for unrelated purposes.
        </p>
      </section>

      <section>
        <h2>11. Sensitive moments</h2>
        <p>
          FACKTS should use additional judgment before publishing media involving
          injury, medical treatment, distress, private conversations, vulnerable
          people or information that could expose a person to unnecessary harm or
          humiliation. A dramatic moment is not automatically a publishing right.
        </p>
      </section>

      <section>
        <h2>12. Requesting withdrawal or raising a concern</h2>
        <p>
          Send the person's name, the event or project, the relevant link or
          description of the media, and the request to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          FACKTS may ask for reasonable information to verify identity or authority,
          particularly where a request concerns a minor.
        </p>
      </section>
    </LegalLayout>
  );
}
