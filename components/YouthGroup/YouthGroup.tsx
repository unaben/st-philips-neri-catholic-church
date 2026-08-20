'use client'

import ContentWrap from "@/components/ContentWrap/ContentWrap";
import Hero from "@/components/Hero/Hero";
import useYouthGroup from "./hooks/useYouthGroup";
import {
  QUICK_FACTS,
  AGE_GROUPS,
  ACTIVITIES,
  UPCOMING_EVENTS,
  FAQS,
  LEADERS,
} from "./constants";
import styles from "./YouthGroup.module.css";

function YouthGroup() {
  const { openFaqIndex, toggleFaq } = useYouthGroup();

  return (
    <>
      <Hero title="Youth Group" imgUrl="/images/youths_img1.webp"/>
      <div className={styles.accentBar} aria-hidden="true" />
      <div className={styles.intro}>
        <ContentWrap className={styles.introInner}>          
          <div className={styles.rainbowBar} />
          <span className={styles.badge}>Faith, Friendship & Fun</span>
          <h1 className={styles.title}>
            Growing in Faith Together
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h1>
          <p className={styles.leadText}>
            Our Youth Group is a place where children and teenagers from the
            parish and wider Smethwick community come together to build
            friendships, ask big questions, and grow in their faith. Every
            session is led by DBS checked volunteers in a safe, welcoming space.
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
        <h2 className={styles.sectionHeading}>Age Groups</h2>
        <p className={styles.sectionIntro}>
          Sessions run in parallel so every young person finds a group suited to
          their age.
        </p>

        <div className={styles.ageGrid}>
          {AGE_GROUPS.map(({ name, ageRange, description }) => (
            <div key={name} className={styles.ageCard}>
              <span className={styles.ageRange}>{ageRange}</span>
              <h3 className={styles.ageName}>{name}</h3>
              <p className={styles.ageText}>{description}</p>
            </div>
          ))}
        </div>
      </ContentWrap>

      <div className={styles.activitiesSection}>
        <ContentWrap className={styles.activitiesInner}>
          <h2 className={styles.sectionHeading}>What We Get Up To</h2>
          <div className={styles.activitiesGrid}>
            {ACTIVITIES.map(({ icon, title, description }) => (
              <div key={title} className={styles.activityCard}>
                <div className={styles.activityIcon} aria-hidden="true">
                  {icon}
                </div>
                <h3 className={styles.activityTitle}>{title}</h3>
                <p className={styles.activityText}>{description}</p>
              </div>
            ))}
          </div>
        </ContentWrap>
      </div>

      <ContentWrap as="section" className={styles.section}>
        <h2 className={styles.sectionHeading}>Upcoming Events</h2>
        <ol className={styles.eventsList}>
          {UPCOMING_EVENTS.map(({ date, title, description }) => (
            <li key={title} className={styles.eventItem}>
              <div className={styles.eventDate}>{date}</div>
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{title}</h3>
                <p className={styles.eventText}>{description}</p>
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
        <h2 className={styles.ctaTitle}>Come Along Any Friday</h2>
        <p className={styles.ctaText}>
          New members are always welcome, no need to book ahead. If you have
          questions first, our leaders are happy to help.
        </p>
        <div className={styles.leadersGrid}>
          {LEADERS.map(({ name, role, email }) => (
            <a
              key={name}
              href={`mailto:${email}`}
              className={styles.leaderCard}
            >
              <span className={styles.leaderName}>{name}</span>
              <span className={styles.leaderRole}>{role}</span>
              <span className={styles.leaderEmail}>{email}</span>
            </a>
          ))}
        </div>
      </ContentWrap>
    </>
  );
}

export default YouthGroup;
