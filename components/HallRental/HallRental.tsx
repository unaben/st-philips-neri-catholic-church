'use client'

import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import useHallRental from "./hooks/useHallRental";
import {
  QUICK_FACTS,
  AMENITIES,
  PRICING,
  BOOKING_STEPS,
  FAQS,
  HALL_MANAGER,
} from "./constants";
import styles from "./HallRental.module.css";

function HallRental() {
  const { openFaqIndex, toggleFaq } = useHallRental();

  return (
    <>
     <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>         
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Community Space</span>
          <h1 className={styles.title}>
            Hire Our Parish Hall
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            Our parish hall is available to hire for parties, celebrations,
            community groups, classes and meetings. Spacious, well equipped and
            centrally located in Smethwick, it&apos;s a welcoming space for
            parishioners and the wider community alike.
          </p>
        </ContentWrap>
      </div>

      <ContentWrap className={styles.factsWrap}>
        <div className={styles.factsStrip}>
          {QUICK_FACTS.map(({ icon, label, value }) => (
            <div key={label} className={styles.factItem}>
              <span className={styles.factIcon} aria-hidden="true">
                {icon}
              </span>
              <span className={styles.factLabel}>{label}</span>
              <span className={styles.factValue}>{value}</span>
            </div>
          ))}
        </div>
      </ContentWrap>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>What&apos;s Included</h2>
        <p className={styles.sectionIntro}>
          Everything you need is on hand, so you can focus on your event.
        </p>

        <div className={styles.amenitiesGrid}>
          {AMENITIES.map(({ icon, title, description }) => (
            <div key={title} className={styles.amenityCard}>
              <div className={styles.amenityIcon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.amenityTitle}>{title}</h3>
              <p className={styles.amenityText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>

      <div className={styles.pricingSection}>
        <ContentWrap className={styles.pricingInner}>
          <h2 className={styles.sectionHeading}>Hire Rates</h2>
          <p className={styles.sectionIntro}>
            Simple, transparent pricing. Get in touch for a quote tailored to
            your event.
          </p>

          <div className={styles.pricingGrid}>
            {PRICING.map(({ name, price, unit, description }) => (
              <div key={name} className={styles.pricingCard}>
                <h3 className={styles.pricingName}>{name}</h3>
                <div className={styles.pricingAmount}>{price}</div>
                <div className={styles.pricingUnit}>{unit}</div>
                <p className={styles.pricingText}>{description}</p>
              </div>
            ))}
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>How to Book</h2>
        <ol className={styles.stepsList}>
          {BOOKING_STEPS.map(({ title, description }, index) => (
            <li key={title} className={styles.stepItem}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </ContentWrap>

      <div className={styles.faqSection}>
        <ContentWrap className={styles.faqInner}>
          <h2 className={styles.sectionHeading}>Common Questions</h2>
          <div className={styles.faqList}>
            {FAQS.map(({ question, answer }, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={question} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {question}
                    <span className={styles.faqIcon} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p id={`faq-answer-${index}`} className={styles.faqAnswer}>
                      {answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </ContentWrap>
      </div>

      <ContentWrap className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Enquire About Your Date</h2>
        <p className={styles.ctaText}>
          Contact our hall manager to check availability and discuss your event.
        </p>
        <div className={styles.managerCard}>
          <span className={styles.managerRole}>{HALL_MANAGER.role}</span>
          <span className={styles.managerName}>{HALL_MANAGER.name}</span>
          <div className={styles.managerLinks}>
            <a
              href={`mailto:${HALL_MANAGER.email}`}
              className={styles.managerLink}
            >
              ✉️ {HALL_MANAGER.email}
            </a>
            <a
              href={`tel:${HALL_MANAGER.phone.replace(/\s+/g, "")}`}
              className={styles.managerLink}
            >
              📞 {HALL_MANAGER.phone}
            </a>
          </div>
        </div>
      </ContentWrap>
    </>
  );
}

export default HallRental;
