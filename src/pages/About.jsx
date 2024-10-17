import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const About = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-64 h-48 object-cover mb-10"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            {t("aboutUs.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left rtl:text-right">
          {t("aboutUs.content")}
        </p>
      </section>

      {/* service Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.ourServices")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <ul class="list-disc text-left ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.services.1")}</li>
            <li>{t("aboutUs.services.2")}</li>
            <li>{t("aboutUs.services.3")}</li>
          </ul>
        </p>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.areasOfSpecialization")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left">
          <ul class="list-disc ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.specializations.1")}</li>
            <li>{t("aboutUs.specializations.2")}</li>
            <li>{t("aboutUs.specializations.3")}</li>
            <li>{t("aboutUs.specializations.4")}</li>
          </ul>
        </p>
      </section>

      {/* Goals Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.ourGoals")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left">
          <ul class="list-disc ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.Goals.1")}</li>
            <li>{t("aboutUs.Goals.2")}</li>
            <li>{t("aboutUs.Goals.3")}</li>
          </ul>
        </p>
      </section>

      {/* history Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.history")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left rtl:text-right mb-4">
          {t("aboutUs.historyContent")}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <ul class="list-disc text-left ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.historyList.1")}</li>
            <li>{t("aboutUs.historyList.2")}</li>
            <li>{t("aboutUs.historyList.3")}</li>
            <li>{t("aboutUs.historyList.4")}</li>
            <li>{t("aboutUs.historyList.5")}</li>
          </ul>
        </p>
      </section>

      {/* publicationsnd Achievements Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.publicationsndAchievements")}
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left">
          <ul class="list-disc text-left ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.publications.1")}</li>
            <li>{t("aboutUs.publications.2")}</li>
            <li>{t("aboutUs.publications.3")}</li>
            <li>{t("aboutUs.publications.4")}</li>
          </ul>
        </p>
      </section>

      {/* training Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.training")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left">
          <ul class="list-disc ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.trainings.1")}</li>
            <li>{t("aboutUs.trainings.2")}</li>
            <li>{t("aboutUs.trainings.3")}</li>
            <li>{t("aboutUs.trainings.4")}</li>
          </ul>
        </p>
      </section>
        
        {/* keyAchievements Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.keyAchievements")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left">
          <ul class="list-disc ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.achievements.1")}</li>
            <li>{t("aboutUs.achievements.2")}</li>
            <li>{t("aboutUs.achievements.3")}</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default About;
