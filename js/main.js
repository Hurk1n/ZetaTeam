(function () {
  "use strict";

  var data = window.ZETA_DATA || {};
  var activeFilter = "All";

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/`/g, "&#96;");
  }

  function memberLetter(m) {
    var source = String((m && m.name) || "?").trim();
    if (!source) return "?";
    return source.charAt(0).toUpperCase();
  }

  function avatarMarkup(m) {
    var url = String((m && m.avatar) || "").trim();
    if (url) {
      return (
        '<div class="avatar avatar-img" aria-hidden="true">' +
        '<img src="' +
        escapeAttr(url) +
        '" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" />' +
        "</div>"
      );
    }
    return (
      '<div class="avatar" aria-hidden="true">' +
      escapeHtml(memberLetter(m)) +
      "</div>"
    );
  }

  function renderFilters() {
    var host = qs("#memberFilters");
    if (!host) return;
    var dirs = data.directions || ["All"];
    host.innerHTML = dirs
      .map(function (d) {
        var active = d === activeFilter ? " is-active" : "";
        return (
          '<button type="button" class="filter-btn' +
          active +
          '" data-filter="' +
          escapeAttr(d) +
          '" role="tab" aria-selected="' +
          (d === activeFilter ? "true" : "false") +
          '">' +
          escapeHtml(d) +
          "</button>"
        );
      })
      .join("");
  }

  function renderMembers() {
    var host = qs("#memberGrid");
    if (!host) return;
    var members = data.members || [];
    var list = members.filter(function (m) {
      return activeFilter === "All" || m.direction === activeFilter;
    });
    if (!list.length) {
      host.innerHTML = '<div class="member-empty">该方向暂无成员。</div>';
      return;
    }
    host.innerHTML = list
      .map(function (m) {
        var blog = String(m.blog || "").trim();
        var hasBlog = blog && blog !== "#";
        var link = hasBlog
          ? '<a class="member-link" href="' +
            escapeAttr(blog) +
            '" target="_blank" rel="noopener noreferrer">Blog ↗</a>'
          : '<span class="member-link is-disabled">暂无博客</span>';
        return (
          '<article class="member-card">' +
          '<div class="member-top">' +
          avatarMarkup(m) +
          "<div>" +
          '<h3 class="member-name">' +
          escapeHtml(m.name || "") +
          "</h3>" +
          '<span class="member-tag">' +
          escapeHtml(m.direction || "") +
          "</span>" +
          "</div>" +
          "</div>" +
          '<p class="member-bio">' +
          escapeHtml(m.bio || "") +
          "</p>" +
          link +
          "</article>"
        );
      })
      .join("");
  }

  function renderAwards() {
    var host = qs("#awardList");
    if (!host) return;
    var awards = data.awards || [];
    host.innerHTML = awards
      .map(function (a) {
        var placeClass = a.top ? "award-place is-top" : "award-place";
        return (
          '<li class="award-item">' +
          '<div class="award-year">' +
          escapeHtml(a.year || "") +
          "</div>" +
          "<div>" +
          '<h3 class="award-title">' +
          escapeHtml(a.title || "") +
          "</h3>" +
          '<p class="award-note">' +
          escapeHtml(a.note || "") +
          "</p>" +
          "</div>" +
          '<span class="' +
          placeClass +
          '">' +
          escapeHtml(a.place || "") +
          "</span>" +
          "</li>"
        );
      })
      .join("");
  }

  function renderBenefits() {
    var host = qs("#benefitGrid");
    if (!host) return;
    var benefits = data.benefits || [];
    host.innerHTML = benefits
      .map(function (b, i) {
        var idx = String(i + 1).padStart(2, "0");
        return (
          '<article class="benefit-card">' +
          '<div class="benefit-index">' +
          idx +
          "</div>" +
          "<h3>" +
          escapeHtml(b.title || "") +
          "</h3>" +
          "<p>" +
          escapeHtml(b.desc || "") +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function bindFilters() {
    var host = qs("#memberFilters");
    if (!host) return;
    host.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      activeFilter = btn.getAttribute("data-filter") || "All";
      renderFilters();
      renderMembers();
    });
  }

  function bindNav() {
    var toggle = qs("#navToggle");
    var nav = qs("#siteNav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    var links = qsa(".site-nav a");
    var sections = ["home", "about", "members", "awards", "join"]
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    function setActive() {
      var y = window.scrollY + 90;
      var current = "home";
      sections.forEach(function (sec) {
        if (sec.offsetTop <= y) current = sec.id;
      });
      links.forEach(function (a) {
        var href = a.getAttribute("href") || "";
        a.classList.toggle("is-active", href === "#" + current);
      });
    }

    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  function fillMeta() {
    var year = qs("#year");
    if (year) year.textContent = String(new Date().getFullYear());
    var qq = qs("#qqGroup");
    if (qq && data.site && data.site.qqGroup) {
      qq.textContent = data.site.qqGroup;
    }
  }

  function init() {
    renderFilters();
    renderMembers();
    renderAwards();
    renderBenefits();
    bindFilters();
    bindNav();
    fillMeta();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
