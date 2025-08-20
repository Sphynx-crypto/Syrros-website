import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import OpenAI from "./pages/products/OpenAI";
import n8n from "./pages/products/n8n";
import NotebookLM from "./pages/products/NotebookLM";
import Notion from "./pages/products/Notion";
import Pandadoc from "./pages/products/Pandadoc";
import Pennylane from "./pages/products/Pennylane";
import PowerBI from "./pages/products/PowerBI";
import Pytorch from "./pages/products/Pytorch";
import Qonto from "./pages/products/Qonto";
import Retool from "./pages/products/Retool";
import Ringover from "./pages/products/Ringover";
import Slack from "./pages/products/Slack";
import Softr from "./pages/products/Softr";
import Supabase from "./pages/products/Supabase";
import Tableau from "./pages/products/Tableau";
import Weweb from "./pages/products/Weweb";
import Whalesync from "./pages/products/Whalesync";
import Zendesk from "./pages/products/Zendesk";
import Airbyte from "./pages/products/Airbyte";
import Airtable from "./pages/products/Airtable";
import Anthropic from "./pages/products/Anthropic";
import BigQuery from "./pages/products/BigQuery";
import DBT from "./pages/products/DBT";
import Dust from "./pages/products/Dust";
import Fivetran from "./pages/products/Fivetran";
import GoogleDrive from "./pages/products/GoogleDrive";
import Hubspot from "./pages/products/Hubspot";
import Jotform from "./pages/products/Jotform";
import Klaviyo from "./pages/products/Klaviyo";
import LangChain from "./pages/products/LangChain";
import Leadbay from "./pages/products/Leadbay";
import Leexi from "./pages/products/Leexi";
import Llama from "./pages/products/Llama";
import Sellsy from "./pages/products/Sellsy";
import LookerStudio from "./pages/products/LookerStudio";
import MODULR from "./pages/products/MODULR";
import ScrollToTop from "./components/ScrollToTop"
import Articles from "./pages/Articles";



function App() {
  return (
     <BrowserRouter basename="/Syrros-website">
      <div className="min-h-screen text-white">
        <Header />
        <main>
           <ScrollToTop />
          <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rendez-vous" element={<BookAppointment />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/témoignages" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/openai" element={<OpenAI />} />
            <Route path="/n8n" element={<n8n />} />
            <Route path="/notebooklm" element={<NotebookLM />} />
            <Route path="/notion" element={<Notion />} />
            <Route path="/pandadoc" element={<Pandadoc />} />
            <Route path="/pennylane" element={<Pennylane />} />
            <Route path="/powerbi" element={<PowerBI />} />
            <Route path="/pytorch" element={<Pytorch />} />
            <Route path="/qonto" element={<Qonto />} />
            <Route path="/retool" element={<Retool />} />
            <Route path="/ringover" element={<Ringover />} />
            <Route path="/slack" element={<Slack />} />
            <Route path="/softr" element={<Softr />} />
            <Route path="/supabase" element={<Supabase />} />
            <Route path="/tableau" element={<Tableau />} />
            <Route path="/weweb" element={<Weweb />} />
            <Route path="/whalesync" element={<Whalesync />} />
            <Route path="/zendesk" element={<Zendesk />} />
            <Route path="/airbyte" element={<Airbyte />} />
            <Route path="/airtable" element={<Airtable />} />
            <Route path="/anthropic" element={<Anthropic />} />
            <Route path="/bigquery" element={<BigQuery />} />
            <Route path="/dbt" element={<DBT />} />
            <Route path="/dust" element={<Dust />} />
            <Route path="/fivetran" element={<Fivetran />} />
            <Route path="/googledrive" element={<GoogleDrive />} />
            <Route path="/hubspot" element={<Hubspot />} />
            <Route path="/jotform" element={<Jotform />} />
            <Route path="/klaviyo" element={<Klaviyo />} />
            <Route path="/langchain" element={<LangChain />} />
            <Route path="/leadbay" element={<Leadbay />} />
            <Route path="/leexi" element={<Leexi />} />
            <Route path="/llama" element={<Llama />} />
            <Route path="/sellsy" element={<Sellsy />} />
            <Route path="/lookerstudio" element={<LookerStudio />} />
            <Route path="/modulr" element={<MODULR />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
