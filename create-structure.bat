@echo off
echo Creating Somaticx Portfolio Directory Structure...

REM Create main source directories
mkdir src\app\about
mkdir src\app\portfolio\[projectId]
mkdir src\app\services
mkdir src\app\demo
mkdir src\app\newsroom
mkdir src\app\careers\[jobId]
mkdir src\app\documentation\[docId]
mkdir src\app\support
mkdir src\app\partners
mkdir src\app\blog\[postId]
mkdir src\app\login
mkdir src\app\logout
mkdir src\app\statistics
mkdir src\app\certificates
mkdir src\app\faq

REM Create pages directory for API routes
mkdir src\pages\api

REM Create components directory
mkdir src\components

REM Create other directories
mkdir src\lib
mkdir src\styles
mkdir src\utils
mkdir src\data
mkdir src\context
mkdir src\hooks
mkdir src\public\assets\images
mkdir src\public\assets\videos
mkdir src\public\assets\icons

REM Create files in app directory
echo. > src\app\page.js
echo. > src\app\layout.js
echo. > src\app\globals.css
echo. > src\app\not-found.js

REM Create page files
echo. > src\app\about\page.js
echo. > src\app\portfolio\page.js
echo. > src\app\portfolio\[projectId]\page.js
echo. > src\app\services\page.js
echo. > src\app\demo\page.js
echo. > src\app\newsroom\page.js
echo. > src\app\careers\page.js
echo. > src\app\careers\[jobId]\page.js
echo. > src\app\documentation\page.js
echo. > src\app\documentation\[docId]\page.js
echo. > src\app\support\page.js
echo. > src\app\partners\page.js
echo. > src\app\blog\page.js
echo. > src\app\blog\[postId]\page.js
echo. > src\app\login\page.js
echo. > src\app\logout\page.js
echo. > src\app\statistics\page.js
echo. > src\app\certificates\page.js
echo. > src\app\faq\page.js

REM Create component files
echo. > src\components\Layout.js
echo. > src\components\Header.js
echo. > src\components\Footer.js
echo. > src\components\HeroSection.js
echo. > src\components\WhyUs.js
echo. > src\components\StatsBar.js
echo. > src\components\ProductDemoCarousel.js
echo. > src\components\NewsroomTicker.js
echo. > src\components\SocialRow.js
echo. > src\components\LeadershipSection.js
echo. > src\components\TeamShowcase.js
echo. > src\components\ProjectCard.js
echo. > src\components\ProjectGallery.js
echo. > src\components\PartnerLogos.js
echo. > src\components\AwardsShowcase.js
echo. > src\components\CareersTable.js
echo. > src\components\CareersIntro.js
echo. > src\components\ApplicationProcess.js
echo. > src\components\DocumentationSidebar.js
echo. > src\components\BlogCard.js
echo. > src\components\BlogList.js
echo. > src\components\ContactForm.js
echo. > src\components\SupportForm.js
echo. > src\components\LoginForm.js
echo. > src\components\StatisticsRow.js
echo. > src\components\FaqAccordion.js
echo. > src\components\CertificatesCarousel.js

REM Create lib files
echo. > src\lib\supabaseClient.js
echo. > src\lib\api.js

REM Create styles
echo. > src\styles\globals.css
echo. > src\styles\tailwind.css

REM Create utils
echo. > src\utils\constants.js
echo. > src\utils\formatters.js

REM Create context and hooks
echo. > src\context\AuthContext.js
echo. > src\hooks\useAuth.js

REM Create environment file
echo. > .env.local

echo Directory structure created successfully!
echo.
echo Next steps:
echo 1. Save this batch file as 'create-structure.bat' in your project root
echo 2. Run it from your project root directory
echo 3. Configure your .env.local file with Supabase credentials
echo 4. Start building your components!

pause