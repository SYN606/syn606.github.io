import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
    const breadcrumbSchema = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Visit Linkedin",
                "item": "https://www.linkedin.com/in/syn606/",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Youtube",
                "item": "https://youtube.com/@syn_606",
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Telegram",
                "item": "https://t.me/syn_606",
            },
        ],
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
