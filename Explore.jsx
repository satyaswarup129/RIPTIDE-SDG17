import React, { useState } from 'react';
import './Explore.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="explore-container">
      <div className="tabs">
        <button 
          className={activeTab === 'overview' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('overview')}
        >
          <img src='/src/assets/fish.png' height={19} width={19}></img>  Overview
        </button>
        <button 
          className={activeTab === 'facts' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('facts')}
        >
          <img src='/src/assets/Analytics.png' height={17} width={17}></img>  Facts and figures
        </button>
        <button 
          className={activeTab === 'goal14' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('goal14')}
        >
          <img src='/src/assets/target.png' height={16} width={16}></img>  Goal 14 targets
        </button>
        <button 
          className={activeTab === 'links' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('links')}
        >
          <img src='/src/assets/link.png' height={16} width={16}></img>  Links
        </button>
      </div>
      <div className="content">
        {activeTab === 'overview' && (
          <div className="section">
            <h2>Conserve and sustainably use the oceans, seas and marine resources</h2>
            <p>
              The world’s oceans – their temperature, chemistry, currents and life – drive global systems that make the Earth habitable for humankind. 
              How we manage this vital resource is essential for humanity as a whole, and to counter balance the effects of climate change.
            </p>
            <p>
              Over three billion people depend on marine and coastal biodiversity for their livelihoods. However, today we are seeing 30 percent of the 
              world’s fish stocks overexploited, well below a level at which they can produce sustainable yields.
            </p>
            <p>
              Oceans also absorb about 30 percent of the carbon dioxide produced by humans, and we are seeing a 26 percent rise in ocean acidification 
              since the beginning of the industrial revolution. Marine pollution, an overwhelming majority of which comes from land-based sources, 
              is reaching alarming levels, with an average of 13,000 pieces of plastic litter to be found on every square kilometer of ocean.
            </p>
            <p>
              The Sustainable Development Goals (SDGs) create a framework to sustainably manage and protect marine and coastal ecosystems from 
              land-based pollution, as well as address the impacts of ocean acidification. Enhancing conservation and the sustainable use of 
              ocean-based resources through international law will also help mitigate some of the challenges facing our oceans.
            </p>
            <p>
              Protecting our oceans is one of 17 Global Goals that make up the 
              <a href="https://sdgs.un.org/goals/goal14" target="_blank" rel="noopener noreferrer"> 2030 Agenda for Sustainable Development</a>. 
              An integrated approach is crucial for progress across the multiple goals.
            </p>
            <p>
              <a href="https://sdgs.un.org/goals/goal14" target="_blank" rel="noopener noreferrer">Learn more about the targets for Goal 14.</a>
            </p>
          </div>
        )}
        {activeTab === 'facts' && (
          <div className="section">
            <ul>
              <li><a href="https://www.fao.org/fishery/en">Oceans cover three quarters</a> of the Earth’s surface, contain 97 percent of the Earth’s water, and represent 99 percent of the living space on the planet by volume.</li>
              <h3>Climate Change</h3>
              <li><a href="https://www.fao.org/fishery/en">Oceans absorb about 30 percent</a> of carbon dioxide produced by humans, buffering the impacts of global warming.</li>
              <li>Carbon emissions from human activities are <a href="https://www.fao.org/fishery/en">causing ocean warming, acidification and oxygen losss</a>.</li>
              <li>The ocean has also absorbed <a href="https://www.fao.org/fishery/en">more than 90 percent</a> of the excess heat in the climate system.</li>
              <li>Ocean heat is at record levels, causing <a href="https://www.fao.org/fishery/en">widespread marine heatwaves.</a></li>
              <h3>Ocean and people</h3>
              <li><a href="https://www.fao.org/fishery/en">Over three billion</a> people depend on marine and coastal biodiversity for their livelihoods.</li>
              <li>Globally, <a href="https://www.fao.org/fishery/en">the market value of marine and coastal resources</a> and industries is estimated at $3 trillion per year or about 5 percent of global GDP.</li>
              <li><a href="https://www.fao.org/fishery/en">Marine fisheries</a> directly or indirectly employ over 200 million people.</li>
              <li>Coastal waters are deteriorating due to pollution and eutrophication. Without concerted efforts, <a href="https://www.fao.org/fishery/en">coastal eutrophication is expected to increase</a> in 20 percent of large marine ecosystems by 2050.</li>
              <li>Roughly <a href="https://www.fao.org/fishery/en">80 percent</a> of marine and coastal pollution originates on land – including agricultural run-off, pesticides, plastics and untreated sewage.</li>
              <li>Around the world, <a href="https://www.fao.org/fishery/en">one million plastic drinking bottles are purchased every minute</a>, while up to 5 trillion single-use plastic bags are used worldwide every year.</li>
              <li>Around <a href="https://www.fao.org/fishery/en">680 million people live in low-lying coastal zones</a> – that is expected to increase to a billion by 2050.</li>
              <li>Sustainable and climate-resilient transport, including maritime transport, is key to sustainable development. <a href="https://www.fao.org/fishery/en">Around 80 percent</a> of the volume of international trade in goods is carried by sea, and the percentage is even higher for most developing countries.</li>
            </ul>
          </div>
        )}
        {activeTab === 'goal14' && (
          <div className="section">
            <ul>
              <li>By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution</li>
              <li>By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans</li>
              <li>Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels</li>
              <li>By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics</li>
              <li>By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information</li>
              <li>By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation</li>
              <li>By 2030, increase the economic benefits to Small Island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism</li>
              <li>Increase scientific knowledge, develop research capacity and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission Criteria and Guidelines on the Transfer of Marine Technology, in order to improve ocean health and to enhance the contribution of marine biodiversity to the development of developing countries, in particular small island developing States and least developed countries</li>
              <li>Provide access for small-scale artisanal fishers to marine resources and markets</li>
              <li>Enhance the conservation and sustainable use of oceans and their resources by implementing international law as reflected in UNCLOS, which provides the legal framework for the conservation and sustainable use of oceans and their resources, as recalled in paragraph 158 of The Future We Want</li>
            </ul>
          </div>
        )}
        {activeTab === 'links' && (
          <div className="section">
            <ul>
              <li><a href="https://www.fao.org/fishery/en">FAO Fisheries and Aquaculture</a></li>
              <li><a href="https://www.unep.org/explore-topics/ecosystems-and-biodiversity">UNEP Ecosystem Management</a></li>
              <li><a href="https://www.cbd.int/">Convention on Biological Diversity</a></li>
              <li><a href="https://unoceans.org/">UN-OCEANS</a></li>
              <li><a href="https://www.unesco.org/en/ocean">UNESCO Intergovernmental Oceanographic Commission</a></li>
              <li><a href="https://www.undp.org/water">UNDP Water and Ocean governance</a></li>
              <li><a href="https://www.imo.org/en/Home/ErrorPageNotFound?aspxerrorpath=/en/Pages/Default.aspx">IMO</a></li>
              <li><a href="https://www.un.org/en/conferences/ocean2022">Ocean Conference 2020</a></li>
              <li><a href="https://www.un.org/depts/los/index.htm">UN Division for Ocean Affairs and Law of the Sea</a></li>
              <li><a href="https://www.undp.org/sustainable-development-goals-archived#below-water">UNDP – Oceans</a></li>
              <li><a href="https://www.unep.org/explore-topics/sustainable-development-goals/why-do-sustainable-development-goals-matter/goal-14">UNEP – Oceans</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
