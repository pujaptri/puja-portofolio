document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {

      // 🧩 Bagian "About"
      document.getElementById("about").textContent = data.about;

      // 🧩 Bagian "Projects"
      const ul = document.querySelector(".projects ul");
      ul.innerHTML = "";
      data.projects.forEach(p => {
        // kalau p berupa object (ada title & description)
        if (typeof p === "object") {
          const li = document.createElement("li");
          li.innerHTML = `<strong>${p.title}</strong><br>${p.description}`;
          ul.appendChild(li);
        } 
        // kalau p cuma string
        else {
          const li = document.createElement("li");
          li.textContent = p;
          ul.appendChild(li);
        }
      });

      // 🧩 Bagian Sosial Media (ikon di header)
      document.querySelector("a[title='WhatsApp']").href = data.socials.whatsapp;
      document.querySelector("a[title='Gmail']").href = data.socials.gmail;
      document.querySelector("a[title='LinkedIn']").href = data.socials.linkedin;

    })
    .catch(err => console.error("Error loading data:", err));
});


