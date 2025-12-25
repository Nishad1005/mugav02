"use client";

import React, { useEffect, useState } from 'react';

const Locations = () => {
    const [times, setTimes] = useState({
        denver: '',
        reykjavik: '',
        madrid: ''
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            setTimes({
                denver: now.toLocaleTimeString('en-US', {
                    timeZone: 'America/Denver',
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }),
                reykjavik: now.toLocaleTimeString('en-US', {
                    timeZone: 'Atlantic/Reykjavik',
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }),
                madrid: now.toLocaleTimeString('en-US', {
                    timeZone: 'Europe/Madrid',
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="aboutus_locations panel">
            <div className="marquee_wrapper">
                <div jo-marquee-element="marquee" className="marquee --playing" style={{ '--marquee-speed': '30s', '--marquee-out': 'translateX(-50%)' } as React.CSSProperties}>
                    <div jo-marquee-element="inner" className="group_locations">
                        <div className="panel">
                            <div jo-location-element="location-card" className="card_location">
                                <div jo-location-timezone="America/Denver" className="card_location_time">{times.denver || '11:42:02'}</div>
                                <div className="w-layout-vflex card_location_text">
                                    <div className="card_location_label">Denver, CO, U.S.A.<br /></div>
                                    <div jo-location-element="comment" className="card_location_comment">Howdy partner, ready to wrangle some tasks?</div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div jo-location-element="location-card" className="card_location">
                                <div jo-location-timezone="Atlantic/Reykjavik" className="card_location_time">{times.reykjavik || '18:42:02'}</div>
                                <div className="w-layout-vflex card_location_text">
                                    <div className="card_location_label">Reykjavík, Iceland<br /></div>
                                    <div jo-location-element="comment" className="card_location_comment">Coffee in one hand, solving mysteries with the other.</div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div jo-location-element="location-card" className="card_location">
                                <div jo-location-timezone="Europe/Madrid" className="card_location_time">{times.madrid || '19:42:02'}</div>
                                <div className="w-layout-vflex card_location_text">
                                    <div className="card_location_label">Granada, Spain</div>
                                    <div jo-location-element="comment" className="card_location_comment">Dreaming of tomorrow’s adventures.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Duplicate for infinite loop */}
                    <div jo-marquee-element="inner" className="group_locations">
                        <div className="panel">
                            <div jo-location-element="location-card" className="card_location">
                                <div jo-location-timezone="America/Denver" className="card_location_time">{times.denver || '11:42:02'}</div>
                                <div className="w-layout-vflex card_location_text">
                                    <div className="card_location_label">Denver, CO, U.S.A.<br /></div>
                                    <div jo-location-element="comment" className="card_location_comment">Howdy partner, ready to wrangle some tasks?</div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div jo-location-element="location-card" className="card_location">
                                <div jo-location-timezone="Atlantic/Reykjavik" className="card_location_time">{times.reykjavik || '18:42:02'}</div>
                                <div className="w-layout-vflex card_location_text">
                                    <div className="card_location_label">Reykjavík, Iceland<br /></div>
                                    <div jo-location-element="comment" className="card_location_comment">Coffee in one hand, solving mysteries with the other.</div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div jo-location-element="location-card" className="card_location">
                                <div jo-location-timezone="Europe/Madrid" className="card_location_time">{times.madrid || '19:42:02'}</div>
                                <div className="w-layout-vflex card_location_text">
                                    <div className="card_location_label">Granada, Spain</div>
                                    <div jo-location-element="comment" className="card_location_comment">Dreaming of tomorrow’s adventures.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
