const setElement = (link, i, menu, showMenu, serviceRef, areaRef, priceRef) => {
    switch (true) {
        case link.type === 'Services': return (<a key={i} className={menu.links} href={link?.link} onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }); showMenu() }}>{link.type}</a>)
        case link.type === 'Pricing': return (<a key={i} className={menu.links} href={link?.link} onClick={() => { priceRef.current?.scrollIntoView({ behavior: 'smooth' }); showMenu() }}>{link?.type}</a>);
        case link.type === 'Terms & Conditions': return (<a key={i} className={menu.links} href={link?.link} onClick={showMenu} target='_blank' rel="noreferrer">{link?.type}</a>);
        case link.type === 'Contact Us': return (<a key={i} className={menu.links} href={link?.link} onClick={showMenu}>{link?.type}</a>);
        case link.type === 'Discounts': return (<a key={i} className={menu.links} href={link?.link} onClick={showMenu} target='_blank' rel="noreferrer">{link?.type}</a>);
        case link.type === 'Schedule Now': return (<a key={i} id="schedule_element" className={menu.links} href={link?.link} onClick={showMenu} target='_blank' rel="noreferrer">{link?.type}</a>);
    }
}

export default setElement
