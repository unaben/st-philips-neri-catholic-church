import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  imgUrl?: string;
};

const Hero = (props: HeroProps) => {
  const { title, imgUrl = "/images/parish-alter.webp" } = props;
  return (
    <section className={styles.hero} aria-label={`${title} hero`}>
      <Image
        src={imgUrl}
        alt={`${title} — St. Philip Neri Catholic Church`}
        fill
        priority
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbHome}>
            Home
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden="true" />
          <span className={styles.breadcrumbCurrent} aria-current="page">
            {title}
          </span>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
