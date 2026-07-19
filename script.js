/* ============================================
   Portfolio — Amelia Siti Nur A
   - Multi bahasa (ID / EN) via data-i18n
   - Toggle tema light / dark
   - Animasi ketik terminal, reveal on scroll, menu mobile
   Preferensi tersimpan di localStorage.
   ============================================ */

/* ---------- Kamus terjemahan ---------- */
const i18n = {
  id: {
    "nav.exp": "Pengalaman",
    "nav.projects": "Proyek",
    "nav.certs": "Sertifikat",
    "nav.contact": "Hubungi Saya",

    "hero.status": "Open to work · Malang, Jawa Timur",
    "hero.role": 'Backend Developer — <em>Node.js Specialist</em>',
    "hero.desc":
      'Merancang dan membangun backend yang <strong>scalable</strong> dan <strong>maintainable</strong> dengan NodeJS, NestJS, dan ExpressJS. Terbiasa bekerja dalam tim agile, menyelesaikan masalah teknis, dan antusias mempelajari teknologi baru.',
    "hero.cta1": "Lihat Proyek",
    "hero.cta2": "Hubungi Saya",
    "hero.meta": "Nov 2023 — sekarang",

    "skills.title": "Teknologi yang saya pakai sehari-hari",

    "exp.endpoint": "/pengalaman",
    "exp.title": "Pengalaman kerja",
    "exp.1.date": "Nov 2023 — Sekarang",
    "exp.1.points":
      "<li>Mengembangkan backend API untuk berbagai solusi perangkat lunak.</li><li>Berkolaborasi dengan tim frontend untuk memastikan integrasi yang optimal.</li><li>Merancang, mengimplementasikan, dan mengoptimalkan API serta database untuk aplikasi performa tinggi.</li>",
    "exp.2.date": "Agu 2022 — Nov 2023",
    "exp.2.points":
      "<li>Mengembangkan aplikasi berbasis NestJS dan Laravel.</li><li>Menyelesaikan fitur tambahan dan perbaikan error dari permintaan klien.</li><li>Berkolaborasi dalam tim pengembangan dengan pendekatan agile.</li>",
    "exp.3.role": "Intern, Departemen Airport Technical · <span>PT. Angkasa Pura I Juanda</span>",
    "exp.3.points":
      "<li>Mempelajari sistem hardware dan software yang menunjang keamanan bandara.</li><li>Mendukung pengelolaan sistem teknologi dan keselamatan di lingkungan bandara.</li>",

    "proj.endpoint": "/proyek",
    "proj.title": "Proyek pilihan",
    "proj.badge": "aktif",
    "proj.1.date": "Jan 2026 — Sekarang",
    "proj.1.desc":
      "Sistem backend untuk kebutuhan operasional produksi: REST API untuk integrasi data, monitoring performa, serta optimasi query agar sistem stabil dan efisien.",
    "proj.2.date": "Mar 2025 — Des 2025",
    "proj.2.desc":
      "Backend sistem dashboard monitoring: REST API, pengelolaan struktur database, dan optimasi performa serta akurasi data untuk kebutuhan pelaporan.",
    "proj.3.date": "Des 2023 — Jan 2026",
    "proj.3.desc":
      "Backend untuk kebutuhan produksi: API integrasi data produksi dan monitoring performa, dengan debugging serta optimalisasi sistem secara berkala.",
    "proj.4.desc":
      "REST API dengan ExpressJS & TypeScript, perancangan skema database MS SQL dengan optimasi query, dan integrasi frontend untuk manajemen data real-time.",
    "proj.5.date": "Mar — Agu 2023",
    "proj.5.desc":
      "Backend API dengan NestJS, integrasi layanan pihak ketiga untuk kebutuhan transaksi, dan optimasi performa query database untuk mengurangi latency.",
    "proj.6.date": "Mei — Jun 2023",
    "proj.6.desc":
      "Redesain struktur backend dengan Laravel, implementasi UI baru menggunakan Bootstrap, dan optimasi query database untuk kecepatan akses.",

    "cred.endpoint": "/sertifikat",
    "cred.title": "Sertifikat & pendidikan",
    "cred.label1": "sertifikat",
    "cred.label2": "pendidikan",
    "cred.edu1": "S1 Sistem Informasi · 2023 — 2027 (on-going)",
    "cred.edu2": "Rekayasa Perangkat Lunak (RPL) · 2019 — 2022",

    "contact.endpoint": "/kontak",
    "contact.title": "Mari bekerja sama",
    "contact.lead":
      "Punya proyek backend yang butuh API rapi, cepat, dan mudah dirawat? Saya terbuka untuk peluang kerja maupun kolaborasi.",

    "footer.note": "Dibangun dengan HTML, CSS & JS — tanpa framework.",
  },

  en: {
    "nav.exp": "Experience",
    "nav.projects": "Projects",
    "nav.certs": "Certificates",
    "nav.contact": "Contact Me",

    "hero.status": "Open to work · Malang, East Java",
    "hero.role": 'Backend Developer — <em>Node.js Specialist</em>',
    "hero.desc":
      'Designing and building <strong>scalable</strong>, <strong>maintainable</strong> backends with NodeJS, NestJS, and ExpressJS. Used to working in agile teams, solving technical problems, and always eager to learn new technologies.',
    "hero.cta1": "View Projects",
    "hero.cta2": "Contact Me",
    "hero.meta": "Nov 2023 — present",

    "skills.title": "Technologies I work with daily",

    "exp.endpoint": "/experience",
    "exp.title": "Work experience",
    "exp.1.date": "Nov 2023 — Present",
    "exp.1.points":
      "<li>Developing backend APIs for a wide range of software solutions.</li><li>Collaborating with the frontend team to ensure seamless integration.</li><li>Designing, implementing, and optimizing APIs and databases for high-performance applications.</li>",
    "exp.2.date": "Aug 2022 — Nov 2023",
    "exp.2.points":
      "<li>Built applications based on NestJS and Laravel.</li><li>Delivered additional features and bug fixes based on client requests.</li><li>Collaborated within a development team using an agile approach.</li>",
    "exp.3.role": "Intern, Airport Technical Department · <span>PT. Angkasa Pura I Juanda</span>",
    "exp.3.points":
      "<li>Studied the hardware and software systems supporting airport security.</li><li>Supported technology and safety system management across the airport.</li>",

    "proj.endpoint": "/projects",
    "proj.title": "Selected projects",
    "proj.badge": "active",
    "proj.1.date": "Jan 2026 — Present",
    "proj.1.desc":
      "Backend system for production operations: REST APIs for data integration, performance monitoring, and query optimization to keep the system stable and efficient.",
    "proj.2.date": "Mar 2025 — Dec 2025",
    "proj.2.desc":
      "Backend for a monitoring dashboard: REST APIs, database structure management, and performance & data-accuracy optimization for reporting needs.",
    "proj.3.date": "Dec 2023 — Jan 2026",
    "proj.3.desc":
      "Backend for production needs: APIs for production data integration and performance monitoring, with regular debugging and system optimization.",
    "proj.4.desc":
      "REST APIs with ExpressJS & TypeScript, MS SQL database schema design with query optimization, and frontend integration for real-time data management.",
    "proj.5.date": "Mar — Aug 2023",
    "proj.5.desc":
      "Backend APIs with NestJS, third-party service integration for transaction needs, and database query optimization to reduce latency.",
    "proj.6.date": "May — Jun 2023",
    "proj.6.desc":
      "Backend restructuring with Laravel, new UI implementation using Bootstrap, and database query optimization for faster access.",

    "cred.endpoint": "/certificates",
    "cred.title": "Certificates & education",
    "cred.label1": "certificates",
    "cred.label2": "education",
    "cred.edu1": "BSc in Information Systems · 2023 — 2027 (on-going)",
    "cred.edu2": "Software Engineering (RPL) · 2019 — 2022",

    "contact.endpoint": "/contact",
    "contact.title": "Let's work together",
    "contact.lead":
      "Have a backend project that needs clean, fast, and maintainable APIs? I'm open to job opportunities and collaborations.",

    "footer.note": "Built with HTML, CSS & JS — no frameworks.",
  },
};

/* ---------- Konten terminal per bahasa ---------- */
function getTerminalLines(lang) {
  const t =
    lang === "en"
      ? { name: "name", role: "role", spec: "specialization", loc: "location", locVal: "Malang, East Java" }
      : { name: "nama", role: "role", spec: "spesialisasi", loc: "lokasi", locVal: "Malang, Jawa Timur" };

  return [
    '\n<span class="j-ok">HTTP/1.1 200 OK</span>',
    '<span class="j-brace">{</span>',
    `  <span class="j-key">"${t.name}"</span>: <span class="j-str">"Amelia Siti Nur A"</span>,`,
    `  <span class="j-key">"${t.role}"</span>: <span class="j-str">"Backend Developer"</span>,`,
    `  <span class="j-key">"${t.spec}"</span>: <span class="j-str">"Node.js"</span>,`,
    `  <span class="j-key">"${t.loc}"</span>: <span class="j-str">"${t.locVal}"</span>,`,
    '  <span class="j-key">"stack"</span>: <span class="j-brace">[</span><span class="j-str">"NestJS"</span>, <span class="j-str">"ExpressJS"</span>, <span class="j-str">"TypeScript"</span><span class="j-brace">]</span>,',
    '  <span class="j-key">"database"</span>: <span class="j-brace">[</span><span class="j-str">"MySQL"</span>, <span class="j-str">"PostgreSQL"</span>, <span class="j-str">"MsSQL"</span><span class="j-brace">]</span>,',
    '  <span class="j-key">"open_to_work"</span>: <span class="j-ok">true</span>',
    '<span class="j-brace">}</span>',
  ];
}

document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Tahun footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Bahasa ---------- */
  let currentLang = localStorage.getItem("lang") || "id";
  const langToggle = document.getElementById("langToggle");

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
    });

    langToggle.querySelectorAll("[data-lang-opt]").forEach((opt) => {
      opt.classList.toggle("active", opt.getAttribute("data-lang-opt") === lang);
    });

    // Jika animasi terminal sudah selesai, ganti isinya langsung
    if (terminalDone) {
      jsonEl.innerHTML = getTerminalLines(lang).join("\n");
    }
  }

  langToggle.addEventListener("click", () => {
    applyLang(currentLang === "id" ? "en" : "id");
  });

  /* ---------- Tema ---------- */
  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  /* ---------- Animasi terminal ---------- */
  const cmdEl = document.getElementById("typedCmd");
  const jsonEl = document.getElementById("jsonOut");
  const command = "curl https://amelia.dev/api/v1/profile";
  let terminalDone = false;

  // Terapkan bahasa tersimpan sebelum animasi dimulai
  applyLang(currentLang);

  if (reducedMotion) {
    cmdEl.textContent = command;
    jsonEl.innerHTML = getTerminalLines(currentLang).join("\n");
    terminalDone = true;
    return;
  }

  let i = 0;
  function typeCommand() {
    if (i < command.length) {
      cmdEl.textContent += command[i];
      i++;
      setTimeout(typeCommand, 32 + Math.random() * 40);
    } else {
      setTimeout(printResponse, 350);
    }
  }

  let line = 0;
  function printResponse() {
    const lines = getTerminalLines(currentLang);
    if (line < lines.length) {
      jsonEl.innerHTML += (line === 0 ? "" : "\n") + lines[line];
      line++;
      setTimeout(printResponse, 110);
    } else {
      terminalDone = true;
    }
  }

  setTimeout(typeCommand, 600);
});
