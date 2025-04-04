import { useStatsigClient } from "@statsig/react-bindings";

const SetElement = (link, i, menu, showMenu, serviceRef, priceRef) => {
    const { client } = useStatsigClient();
    const handleMobileClickServices = () => client.logEvent("services_mobile", "Mobile Menu");
    const handleMobileClickPricing = () => client.logEvent("pricing_mobile", "Mobile Menu");
    const handleMobileClickTerms = () => client.logEvent("terms_mobile", "Mobile Menu");
    const handleMobileClickContact = () => client.logEvent("contact_mobile", "Mobile Menu");
    const handleMobileClickSchedule = () => client.logEvent("schedule_mobile", "Mobile Menu");

    switch (true) {
        case link.type === 'Services': return (<a key={i} id="services_menu" className={menu.links} href={link?.link} onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }); showMenu(); handleMobileClickServices() }}>{link.type}</a>);
        case link.type === 'Pricing': return (<a key={i} id="pricing_menu" className={menu.links} href={link?.link} onClick={() => { priceRef.current?.scrollIntoView({ behavior: 'smooth' }); showMenu(); handleMobileClickPricing() }}>{link?.type}</a>);
        case link.type === 'Terms & Conditions': return (<a key={i} id="terms_menu" className={menu.links} href={link?.link} onClick={() => { showMenu(); handleMobileClickTerms() }} target='_blank' rel="noreferrer">{link?.type}</a>);
        case link.type === 'Contact Us': return (<a key={i} id="contact_menu" className={menu.links} href={link?.link} onClick={() => { showMenu(); handleMobileClickContact() }}>{link?.type}</a>);
        case link.type === 'Schedule Now': return (<a key={i} id="schedule_menu" className={menu.links} href={link?.link} onClick={() => { showMenu(); handleMobileClickSchedule() }} target='_blank' rel="noreferrer">{link?.type}</a>);
    }
}

export default SetElement
