// فایل: commitlint.config.js
// این فایل مشخص می‌کند پیام‌های commit در پروژه باید چه استانداردی داشته باشند.
// commitlint هنگام commit اجرا می‌شود (معمولاً از طریق husky) و اگر پیام مطابق
// قوانین نباشد اجازه commit نمی‌دهد.

// export تنظیمات commitlint
module.exports = {
  // extends یعنی از یک preset آماده استفاده می‌کنیم.
  // config-conventional همان استاندارد Conventional Commits است که در
  // اکثر پروژه‌های open-source استفاده می‌شود.
  // مثال پیام استاندارد:
  // feat: add login page
  // fix: resolve api timeout
  extends: ["@commitlint/config-conventional"],

  // rules شامل قوانین دلخواه پروژه است
  rules: {
    // مشخص می‌کند چه type هایی در ابتدای commit مجاز هستند
    // ساختار rule:
    // [severity, condition, value]

    // severity
    // 0 = غیرفعال
    // 1 = warning
    // 2 = error (کامیت را متوقف می‌کند)

    // condition
    // always = باید رعایت شود
    // never = نباید اتفاق بیفتد

    "type-enum": [
      2, // اگر رعایت نشود commit fail می‌شود
      "always",
      [
        "feat", // اضافه شدن feature جدید
        "fix", // رفع bug
        "docs", // تغییر در مستندات
        "style", // تغییرات ظاهری (فرمت کد، فاصله‌ها و ...)
        "refactor", // ریفکتور بدون تغییر رفتار
        "test", // اضافه یا تغییر تست‌ها
        "chore", // کارهای جانبی (config, build, deps)
      ],
    ],

    // subject نباید خالی باشد
    // مثال درست:
    // feat: add user authentication
    "subject-empty": [2, "never"],

    // حداکثر طول پیام commit
    // کمک می‌کند commit ها خواناتر باشند
    "header-max-length": [2, "always", 72],

    // subject باید با حروف کوچک شروع شود
    // مثال درست:
    // feat: add payment gateway
    // مثال غلط:
    // feat: Add payment gateway
    "subject-case": [
      2,
      "always",
      ["lower-case", "sentence-case", "start-case", "pascal-case"],
    ],
  },
};

/*      
 ========= مثال commit های معتبر =============
text
feat: add authentication system
fix: resolve login validation bug
docs: update installation guide
refactor: simplify user service logic
test: add unit tests for auth module
chore: update dependencies

=========== مثال commit نامعتبر  ================
text
added login page
bug fixed
update

*/
