import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { AnimatedBlock, AnimatedSection } from "@/components/AnimatedSection";
import { MaisonReservationForm } from "@/components/MaisonReservationForm";

import styles from "./maison.module.css";

export const metadata: Metadata = {
  title: "Maison Tsu - Website Design Sample",
  description:
    "A restaurant website design and development sample created by TSU.",
};

const menu = [
  ["Racine de lotus", "徳島 鳴門れんこん"],
  ["Homard", "オマール海老"],
  ["Sabre", "焼津 太刀魚"],
  ["Sériole", "焼津 勘八"],
  ["Bœuf, Hokki", "淡路 経産牛・苫小牧 北寄貝"],
  ["Kinmedai", "焼津 金目鯛"],
  ["Agneau", "シストロン産 仔羊"],
  ["Pâtes", "パスタ"],
  ["Sorbet au Lait de Jersey / Pomme", "久美浜ジャージー牛乳／紅玉"],
  ["Comté 30 mois, gâteau au fromage", "コンテ30ヶ月チーズケーキ"],
  ["Financier / Truffe Chocolat", "フィナンシェ／トリュフショコラ"],
] as const;

export default function MaisonTsuPage() {
  return (
    <div className={styles.page}>
      <div className={styles.sampleBar}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={14} />
          TSU Portfolio
        </Link>
        <span>Website design sample</span>
      </div>

      <nav className={styles.navigation} aria-label="Maison Tsu navigation">
        <a href="#top" className={styles.brand}>
          Maison Tsu
        </a>
        <div className={styles.navLinks}>
          <a href="#house">The house</a>
          <a href="#menu">Menu</a>
          <a href="#reserve">Reserve</a>
        </div>
        <a href="#reserve" className={styles.navCta}>
          Reserve a table
        </a>
      </nav>

      <header id="top" className={styles.hero}>
        <Image
          src="/maison-tsu/exterior.png"
          alt="Maison Tsu restaurant exterior at night"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Cuisine française · 割烹 · Melbourne</p>
          <h1>
            One table,
            <br />
            one menu.
          </h1>
          <p className={styles.heroCopy}>
            Eleven courses shaped by French technique, Japanese produce and
            Victorian growers. A quiet dining room built around one shared
            evening.
          </p>
          <div className={styles.heroActions}>
            <a href="#reserve" className={styles.primaryButton}>
              Reserve a table
            </a>
            <a href="#menu" className={styles.secondaryButton}>
              Read the menu
            </a>
          </div>
        </div>
      </header>

      <AnimatedSection
        id="house"
        className={styles.contentSection}
        distance={24}
        duration={0.68}
        viewportAmount={0.14}
      >
        <p className={styles.kicker}>The house · La maison</p>
        <div className={styles.splitContent}>
          <h2>A single room, an open kitchen, and one menu a night.</h2>
          <div className={styles.prose}>
            <p>
              Maison Tsu serves one seating each evening. Everybody at the
              counter follows the same eleven courses, in the same order, at
              the same pace.
            </p>
            <p>
              The menu records what arrives that day: seafood, vegetables and
              produce selected for clarity, season and place.
            </p>
            <p>
              Wine is offered by the glass alongside the courses, with a short
              bottle list focused on Burgundy, the Loire and Victorian growers.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className={styles.chefSection}
        distance={28}
        duration={0.72}
        viewportAmount={0.12}
      >
        <div className={styles.chefCopy}>
          <p className={styles.kicker}>The kitchen · La cuisine</p>
          <h2>Precision, restraint and ingredients in season.</h2>
          <p>
            The concept brings classical French technique into the measured
            rhythm of a Japanese counter. Each course keeps the focus narrow
            and the composition deliberate.
          </p>
          <blockquote>“Every element on the plate has to earn its place.”</blockquote>
        </div>
        <figure className={styles.chefImageFrame}>
          <Image
            src="/maison-tsu/chef.webp"
            alt="Chef plating a course"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </figure>
      </AnimatedSection>

      <AnimatedSection
        id="menu"
        className={styles.menuSection}
        distance={24}
        duration={0.68}
        viewportAmount={0.08}
      >
        <div className={styles.sectionInner}>
          <p className={styles.kicker}>Menu · Les plats</p>
          <div className={styles.menuHeading}>
            <h2>Menu Dégustation</h2>
            <p>Eleven courses · one seating · about three hours</p>
          </div>
          <ol className={styles.menuList}>
            {menu.map(([course, japanese], index) => (
              <li key={course}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{course}</strong>
                <small>{japanese}</small>
              </li>
            ))}
          </ol>
          <p className={styles.menuNote}>
            The menu changes with the day&apos;s delivery. Dietary restrictions
            and allergies are considered when shared at booking.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedBlock distance={18} duration={0.75} viewportAmount={0.16}>
        <figure className={styles.dishImage}>
          <Image
            src="/maison-tsu/dish.png"
            alt="Maison Tsu plated main course"
            fill
            sizes="100vw"
            className={styles.coverImage}
          />
        </figure>
      </AnimatedBlock>

      <AnimatedSection
        id="reserve"
        className={styles.reserveSection}
        distance={24}
        duration={0.68}
        viewportAmount={0.1}
      >
        <div className={styles.sectionInner}>
          <p className={styles.kicker}>Reserve · Réservations</p>
          <div className={styles.reserveGrid}>
            <MaisonReservationForm />
            <aside className={styles.reserveDetails}>
              <div>
                <span>By mail</span>
                <a href="mailto:ShawnXiaTsu@outlook.com">
                  ShawnXiaTsu@outlook.com
                </a>
              </div>
              <div>
                <span>Hours</span>
                <p>
                  Dinner · Tuesday–Sunday · 18:00–22:30
                  <br />
                  One seating each evening
                </p>
              </div>
              <div>
                <span>Address</span>
                <p>
                  Melbourne, Victoria
                  <br />
                  <em>Street and floor to be confirmed</em>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className={styles.closingSection}
        distance={20}
        duration={0.68}
        viewportAmount={0.18}
      >
        <div className={styles.sectionInner}>
          <h2>
            Eleven courses.
            <br />
            One evening.
          </h2>
          <a
            href="mailto:ShawnXiaTsu@outlook.com?subject=Reservation%20request"
            className={styles.closingLink}
          >
            Write to us
            <ArrowUpRight size={16} />
          </a>
        </div>
      </AnimatedSection>

      <footer className={styles.footer}>
        <span>Maison Tsu · Cuisine française, Melbourne</span>
        <span>Concept website designed and built by TSU</span>
      </footer>
    </div>
  );
}
