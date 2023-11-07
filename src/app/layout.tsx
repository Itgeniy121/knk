import "../../assets/style/style.scss";
import type { Metadata } from "next";
import ProgressBar from "@/components/layout/ProgressBar/ProgressBar";
import ContactButton from "@/components/layout/ContactButton/ContactButton";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: "Создание современных сайтов на заказ в веб студии knkweb",
  description:
    "Разработка сайтов любой сложности на заказ, мобильных приложений, дизайна по всей России в веб студии knkweb.",
  viewport: "width=device-width, initial-scale=1.0, user-scalable=no",
  keywords: "веб студия, сайты на заказ, разработка сайтов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' id='main'>
      <Head>
        <meta name='yandex-verification' content='3e041f65f948fbb7' />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(95239347, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
          }}
        />
        <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/95239347'
              style={{ position: "absolute", left: "-9999px" }}
              alt=''
            />
          </div>
        </noscript>
        <ToastContainer
          position='top-right'
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme='dark'
        />
        <ProgressBar />
        <ContactButton />
        {children}
      </body>
    </html>
  );
}
