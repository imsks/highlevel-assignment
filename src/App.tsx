import { AddNode, DraggbleItem } from "Components"
import "./App.css"
import "./styles.min.css"

const data = {
    id1: {
        label: "Send Email",
        child: {
            id2: {
                label: "Send SMS",
                child: {
                    id3: {
                        condition: "IF",
                        YES: {
                            label: "A",
                            child: {
                                id4: {
                                    label: "END",
                                    isEnd: true
                                }
                            }
                        },
                        NO: {
                            label: "B"
                        }
                    }
                }
            }
        }
    }
}

function App() {
    return (
        <div className='App'>
            <nav className='hl_navbar shrink' id='navbar'>
                <div className='hl_navbar--inner'>
                    <a href='./' className='hl_navbar--logo'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='28'
                            height='26'>
                            <image
                                width='28'
                                height='26'
                                xlinkHref='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADeCAMAAAAjD+0vAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACKFBMVEUAAAD/vAD/vAD/vAA3yjc3yjc3yjf/vAD/vAA3yjc3yjf/vAD/vAD/vAA3yjc3yjf/vAD/vAD+uwH5twT/vAD/vAA3yjc3yjc3yjc2yDY1xjU3yjf/vADjqAs3yjc0uDQYi/YYi/b6uAI2xjb/vAA3yjcYi/YYi/YYi/YYi/bUsy0xvlrzug0Yi/YXgOgWddo1x0EYi/YWddkXd9z/vAA3yjfzrg/xrBEquycpuiX8uQPupxbqoxszxTIktB8isRz9ugLvqRQ0xzMltSH+uwHwqxI1yDUmtiL/vAHyrRA2yTUouCT0sA02yjYpuib2sgvqpBorvCj4tAnrpBouvyv5tgfrpRkvwS0jsh77twXsphgxwzAjsx7tpxczxTHvqRU0xjMltCDwqhM1yDT/uwDxrRE2yDUouCP0rw42yTYpuSX2sQz3tAotvir5tQcvwC0jsh3spRkxwy8yxDEjtB/uqBU0xjIltSD+ugI1xzQmtiEntyMouSX1sQz3swotvin5tQjrpBkuwCz6tgYwwi/7uAXtphcyxDD9uQPuqBYYi/YzxjLxrBImtyIVc9wVctsXg+4Xhe8VdN0Xh/EVdd4XiPMVduAXifQVeOEYivUWeuMYivYWfOUWfugXgOsXguwXhO8YhvEYiPIYifMWeOEVeeMWe+UWfecWf+oXhO4VdNwXhvAYh/IVdd8Wd+EYifQWeOIWeuQYi/UWf+kXgewXhfAVdN7///8CcMFSAAAANHRSTlMAHM03N80c3PHx3C/rLS3rfKC/zYsGBougy8B8UH5wWTfxclJwUDXrLe+JiXYQ5+124Ozq9vT/awAAAAFiS0dEt90AO2cAAAAHdElNRQfiAhgXEywya6S9AAAFmUlEQVR42u3a53cWRRTAYVDsil1RURMbsQvOAKJikAh2URQBY6FqrNjBrmAbNSJENMaOimKvf58vSQhv2d1p9969w9zf971znrN75twPO2lSQJMPODDkMaymHHQw1VGTD1GHMrJPOUwfTmRvyBUje0Ouieyjcj72UTmNfVzOxT4up7BPyHnYJ+T49iY5B3uTHNveIq/f3iLHtbfJ67a3yTHtHfJ67R1yPHuBvE57gRzLXiivz14ox7GXyOuyl8gx7KXyeuylcnh7hbwOe4Uc2l4pp7dXymHtFnnDfgQjOaTdKlfqyKMYyeHsDnJK+1S7HMruJKezTz3aQQ5jd5RT2R3lEHZnOY3dWR5v95BT2D3ksXYvOb7dSx5n95Rj2z3lMXZvOa7dWx5uD5Bj2gPkofYgOZ49SB5mD5Rj2QPlIfZgOY49WO5vj5Bj2CPkvvYoObw9Su5nj5RD2yPlPvZoOaw9Wu5uB5BD2gHkrnYQOZwdRO5mB5JD2YHkLnYwOYwdTG63A8oh7IBymx1UHm8HlVfbgeWxdmB5lR1cHmcHl5fbEeQxdgR5mR1FHm5HkRfbkeShdiR5kR1NHmZHk3faEeUhdkR5ux1V7m9HlbfakeW+dmR5sx1d7mdHl++zE8h97ATyvXYSubudRD5mJ5K72onko/ZjjrV23Ow51o63jznhRLv8pJOnWTtl7hXWTrWPOc3lTUyfd+VVtk53v8ZiO+Pq+dfYOhPorOmqdwEnur52IR1d9V3Hia4XLaajq+tv4ETXN95ER1fqZk50fcuthHR12xJGdK1vJ6SrO5Zyous7CenqrmWc6Pru5XR0tWIlJ7q+p5+Orubdy4mu75tPR1e993Oi6wdW0dFV32pOdL1mMR1drV3Hia7XP0hHV+ohTnQ98DAhXT3CiV643KDR1aNLOdH1Y4R09fgyTnT9xAY6ulrxJCe6fqqfjt6+3NRM108/Q0dXvc9youvnnqejq42rOdH1phfo6GrtHE50vf5FOrpSsznR9cBLhHT1Mie61nMJ6eqVJZzo+lVCunrtdU50/cYGOrravDKY3tUFTtdbltPR1ZtvBdK7urtD7NV0/XY/HV29824QvavbmBC7ha7fW0VHVxsXBND3yIPsNrretJCOrvre96aPyUPsVrpe9AEdXamzAuUBdjtdD5xNSD8nVO5vd6Drc9nSm+Xe9qTprXJfe8r0drmnPWF6p9zPni69SO5lT5ZeLPexp0ovk3vYE6WXy93tadKr5M72JOnV8ob9vP2VbpMbM6Nn/6Tb5W729Ogucid7cnQ3uYs9Nbqr3MGeGL3nfFe53Z4WvWeGu9xqT4ruJ7fZU6L7yi32hOj+8mp7OvQQeaU9GXqYvMqeCj1UXmFPhB4uL7enQY+Rl9qToMfJy+wp0GPlJfYE6PHyYjt/OoS80M6eDiMvsnOnQ8kL7MzpcPJOO286pLzDzpoOK2+3c6ZDy9vsjOnw8lY7XzqGvMXOlo4jb7ZzpWPJm+xM6XjyfXaedEz5hJ0lHVe+186Rji0ftzOk48vH7PzoFPJROzs6jXyPnRv9AiJ5w34hM/pFF9u7ZPBDW5c6jLmMGd3lD6qZW632WQ5juH3wTnTz0bZs6Wb7ULZ08/GObOnmk0+zpZvhz7Klm5HPs6WbkS+ypRvzZb5089VgtnTz9bZs6eaboWzp5tsd2dLNzu+ypZvh77Olm5EfsqWbkV3Z0o35MV9623KTFd38tDtbuvl5KFu6+eXXbOlm52/Z0s3vf2RLN8N/Zks3f+3Klm7M3/nSzT+D2dLN1t3Z0s2//2VLN9svz5ZuZgpd6EIXutCFLnShC13oQhe60IUudKELXehCF7rQhS50oQtd6EIXutCFLnShC13oQhe60IUudKELXehCF7rQhS50oQtd6EIXutDzov8PkVLtBMKmRJ4AAAAASUVORK5CYII='
                            />
                        </svg>
                    </a>
                    <button
                        className='hl_navbar--toggler'
                        type='button'
                        id='navbar-toggler'>
                        <span className='navbar-toggler-bar'></span>
                        <span className='navbar-toggler-bar'></span>
                        <span className='navbar-toggler-bar'></span>
                    </button>
                    <div className='hl_navbar--collapse' id='navbar-collapse'>
                        <button
                            className='hl_navbar--button btn btn-success btn-block'
                            data-toggle='modal'
                            data-target='#client-checkin--modal'>
                            Check In Client
                        </button>
                        <ul
                            className='hl_navbar--links list-unstyled'
                            id='nav-links'>
                            <li id='nav-dashboard'>
                                <a
                                    href='./'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Dashboard'>
                                    <i className='icon-duplicate'></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li id='nav-widgets'>
                                <a
                                    href='./widgets.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Widgets'>
                                    <i className='icon-tiles-filled'></i>
                                    <span>Widgets</span>
                                </a>
                            </li>
                            <li id='nav-marketing'>
                                <a
                                    data-toggle='collapse'
                                    href='#nav-marketing-collapse'
                                    role='button'
                                    aria-expanded='false'
                                    aria-controls='nav-marketing-collapse'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Marketing'>
                                    <i className='icon-mail'></i>
                                    <span>Marketing</span>
                                    <i className='caret icon-arrow-down-1'></i>
                                </a>
                                <div
                                    className='collapse nav-dropdown-links'
                                    id='nav-marketing-collapse'>
                                    <ul>
                                        <li className='active'>
                                            <a href='./customer-acquisition.html'>
                                                Customer Acquisition
                                            </a>
                                        </li>
                                        <li>
                                            <a href='./triggers.html'>
                                                Triggers
                                            </a>
                                        </li>
                                        <li>
                                            <a href='./funnel-details.html'>
                                                Funnels
                                            </a>
                                        </li>
                                        <li>
                                            <a href='./workflow.html'>
                                                Workflow
                                            </a>
                                        </li>
                                        <li>
                                            <a href='./form-builder.html'>
                                                Form Builder
                                            </a>
                                        </li>
                                        <li>
                                            <a href='./landing-page-creator.html'>
                                                Page Creator
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#s'>Product Adoption</a>
                                        </li>
                                        <li>
                                            <a href='#s'>Product Upsell</a>
                                        </li>
                                        <li>
                                            <a href='#s'>Content Library</a>
                                        </li>
                                        <li>
                                            <a href='#s'>Snapshot Widget</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li id='nav-reviews'>
                                <a
                                    href='./reviews.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Reviews'>
                                    <i className='icon-bubble-filled'></i>
                                    <span>Reviews</span>
                                </a>
                            </li>
                            <li id='nav-customers'>
                                <a
                                    data-toggle='collapse'
                                    href='#nav-customer-collapse'
                                    role='button'
                                    aria-expanded='false'
                                    aria-controls='nav-customer-collapse'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Customers'>
                                    <i className='icon-user'></i>
                                    <span>Customers</span>
                                    <i className='caret icon-arrow-down-1'></i>
                                </a>
                                <div
                                    className='collapse nav-dropdown-links'
                                    id='nav-customer-collapse'>
                                    <ul>
                                        <li className='active'>
                                            <a href='./contact-details.html'>
                                                Contact Details
                                            </a>
                                        </li>
                                        <li>
                                            <a href='./customers.html'>
                                                Customers
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li id='nav-team'>
                                <a
                                    href='./team.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Team'>
                                    <i className='icon-heart'></i>
                                    <span>Team</span>
                                </a>
                            </li>
                            <li id='nav-online-analysis'>
                                <a
                                    href='./online-analysis.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Online Analysis'>
                                    <i className='icon-pulse'></i>
                                    <span>Online Analysis</span>
                                </a>
                            </li>
                            <li id='nav-opportunities'>
                                <a
                                    href='./opportunities.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Opportunities'>
                                    <i className='icon-blocks'></i>
                                    <span>Opportunities</span>
                                </a>
                            </li>
                            <li id='nav-conversations'>
                                <a
                                    href='./conversations.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Conversations'>
                                    <i className='icon-bubble'></i>
                                    <span>Conversations</span>
                                </a>
                            </li>
                            <li id='nav-calendar'>
                                <a
                                    href='./calendar.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Calendar'>
                                    <i className='icon-calendar'></i>
                                    <span>Calendar</span>
                                </a>
                            </li>
                            <li id='nav-settings'>
                                <a
                                    href='./settings-profile.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Settings'>
                                    <i className='icon-settings-1'></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li id='nav-social'>
                                <a
                                    href='./social.html'
                                    data-tooltip='nav-tooltip'
                                    data-placement='right'
                                    title='Social Media'>
                                    <i className='icon-target-2'></i>
                                    <span>Social Media</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className='modal fade'
                id='client-checkin--modal'
                tabIndex={-1}
                role='dialog'
                aria-labelledby='client-checkin--modalLabel'
                aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <div className='modal-header--inner'>
                                <h5
                                    className='modal-title'
                                    id='client-checkin--modalLabel'>
                                    <i className='icon icon-user --green'></i>{" "}
                                    Client Check In
                                </h5>
                                <button
                                    type='button'
                                    className='close'
                                    data-dismiss='modal'
                                    aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                        </div>
                        <div className='modal-body'>
                            <div className='modal-body--inner'>
                                <div className='form-group'>
                                    <label>Customer Phone or Email:</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Customer Phone or Email'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Customer Name:</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Customer Name'
                                    />
                                </div>
                                <div className='modal-buttons d-flex align-items-center justify-content-between'>
                                    <button
                                        type='button'
                                        className='btn btn-link'>
                                        Send to Multiple Clients
                                    </button>
                                    <button
                                        type='button'
                                        className='btn btn-success'>
                                        Send a Review Invite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className='hl_header nav-shrink --call-in'>
                <div className='container-fluid'>
                    <select
                        className='selectpicker hl_header--picker'
                        data-width='fit'
                        data-header="Switch Location <a href='#s'>View Locations</a>">
                        <option data-content="<img src='./img/img-converse.png'> Converse Store #32">
                            Converse Store #32
                        </option>
                        <option data-content="<img src='./img/img-nike1.png'> Nike Store, 49 Garnet Stream, Baja, CA">
                            Nike Store, 49 Garnet Stream, Baja, CA
                        </option>
                        <option data-content="<img src='./img/img-nike2.png'> Nike Store, Andersen Center 83b, West 82nd Street, San Francisco, CA">
                            Nike Store, Andersen Center 83b, West 82nd Street,
                            San Francisco, CA
                        </option>
                    </select>
                    <div className='hl_call-bar --in'>
                        <div className='call-type'>
                            <i className='icon icon-arrow-up-2'></i>
                            <p>In</p>
                        </div>
                        <div className='hl_call-bar--inner'>
                            <div className='caller-id'>
                                <h4>Shaun Clark</h4>
                                <p>HighLevel Company</p>
                            </div>
                            <div className='call-buttons'>
                                <button
                                    type='button'
                                    className='btn btn-circle'>
                                    <i className='icon icon-mic-off'></i>
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-circle btn-arrows'>
                                    <i className='icon icon-arrows-up-down'></i>
                                </button>
                                <div className='call-dial dropdown --no-caret'>
                                    <a
                                        href='#'
                                        className='dropdown-toggle'
                                        role='button'
                                        data-toggle='dropdown'
                                        aria-haspopup='true'
                                        aria-expanded='false'>
                                        <i className='icon icon-dots'></i>
                                    </a>
                                    <div className='dropdown-menu dropdown-menu-right'>
                                        <div className='dial-numbers'>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    1
                                                </a>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    2
                                                </a>
                                                <span className='letters'>
                                                    ABC
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    3
                                                </a>
                                                <span className='letters'>
                                                    DEF
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    4
                                                </a>
                                                <span className='letters'>
                                                    GHI
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    5
                                                </a>
                                                <span className='letters'>
                                                    JKL
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    6
                                                </a>
                                                <span className='letters'>
                                                    MNO
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    7
                                                </a>
                                                <span className='letters'>
                                                    PQRS
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    8
                                                </a>
                                                <span className='letters'>
                                                    TUV
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    9
                                                </a>
                                                <span className='letters'>
                                                    WXYZ
                                                </span>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    *
                                                </a>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    0
                                                </a>
                                            </div>
                                            <div className='dial-item'>
                                                <a href='#s' className='number'>
                                                    #
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='call-actions'>
                            <p className='call-time'>00:00:14</p>
                            <button
                                type='button'
                                className='btn btn-circle-sm btn-danger btn-call'>
                                <i className='fas fa-phone'></i>
                            </button>
                            <button
                                type='button'
                                className='btn btn-info btn-xs btn-next-lead'>
                                Call next Lead
                                <i className='icon icon-arrow-right-2'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className='hl_recent-activities'>
                <div className='hl_recent-activities--inner'>
                    <ul className='hl_recent-activities--list list-unstyled'>
                        <li className='hl_recent-activities--item --notification'>
                            <div className='avatar --sm'>
                                <div className='avatar_img --blue'> BM </div>
                            </div>
                            <p>
                                <strong>Bruce Mann</strong> sent a Review
                                Request to Amanda Nunes.
                            </p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item --notification'>
                            <div className='avatar --sm'>
                                <div className='avatar_img'>
                                    <img
                                        src='./img/img-avatar-sample4.png'
                                        alt='Avatar Name'
                                    />
                                </div>
                            </div>
                            <p>
                                <strong>Henry J.</strong> sent a Review Request
                                to Amanda Nunes.
                            </p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item --notification'>
                            <span className='recent-activities--icon --rating'>
                                <i className='icon icon-star-filled'></i>
                            </span>
                            <p>Our Average Rating went up!</p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item'>
                            <span className='recent-activities--icon --reviews'>
                                <i className='icon icon-send'></i>
                            </span>
                            <p>Milestone of 5,000 team ReviewRequestes hit!</p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item'>
                            <div className='avatar --sm'>
                                <div className='avatar_img --orange'> GT </div>
                            </div>
                            <p>
                                <strong>Gerald Terry</strong> sent a Review
                                Request to Amanda Nunes.
                            </p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item'>
                            <div className='avatar --sm'>
                                <div className='avatar_img --green'> RF </div>
                            </div>
                            <p>
                                <strong>Ricardo Foster</strong> sent a Review
                                Request to Amanda Nunes.
                            </p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item'>
                            <div className='avatar --sm'>
                                <div className='avatar_img'>
                                    <img
                                        src='./img/img-avatar-sample2.png'
                                        alt='Avatar Name'
                                    />
                                </div>
                            </div>
                            <p>
                                <strong>Samantha Irving</strong> sent a Review
                                Request to Amanda Nunes.
                            </p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item'>
                            <div className='avatar --sm'>
                                <div className='avatar_img'>
                                    <img
                                        src='./img/img-avatar-sample3.png'
                                        alt='Avatar Name'
                                    />
                                </div>
                            </div>
                            <p>
                                <strong>Cecelia Atkins</strong> sent a Review
                                Request to Amanda Nunes.
                            </p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item'>
                            <div className='avatar --sm'>
                                <div className='avatar_img --purple'> NP </div>
                            </div>
                            <p>
                                <strong>Norman E. Parque</strong> sent a Review
                                Request to Amanda Nunes.
                            </p>
                            <p className='location'>
                                Nike Store, 49 Garnet Stream, Baja, CA
                            </p>
                            <p className='time-date'>10 min ago</p>
                        </li>
                        <li className='hl_recent-activities--item'>
                            <a href='#s'>Load More</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className='modal review-link--modal'
                tabIndex={-1}
                role='dialog'
                id='review-link--modal'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <button
                            type='button'
                            className='close'
                            data-dismiss='modal'
                            aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                        </button>
                        <div className='modal-body'>
                            <img src='./img/img-link-review-copied.png' />
                            <h4>Link copied to clipboard!</h4>
                            <p>www.somekindoflink.com/mycompanyname/213213</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='hl_wrapper nav-shrink d-flex'>
                <section className='hl_wrapper--inner workflow' id='workflow'>
                    <section className='hl_workflow--main'>
                        <ul className='flow_main'>
                            <li>
                                <ul className='flow_start'>
                                    <li>
                                        <div className='workflow_card'>
                                            <div
                                                className='bubble'
                                                data-popover='popover'
                                                data-content="
                      <div className='workflow_actions'>
                        <ul className='list-inline'>
                          <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                          <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                          <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                        </ul>
                      </div>
                      ">
                                                <p>
                                                    <strong>
                                                        RSS feed
                                                        http://www.activecampaign.com/blog/
                                                        is
                                                    </strong>
                                                    updated and contact has tag
                                                    Blog subscriber
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            className='workflow_card--new'
                                            data-toggle='tooltip'
                                            data-placement='bottom'
                                            title='Add new way to start this automation.'>
                                            <div
                                                className='bubble'
                                                data-toggle='modal'
                                                data-target='#new-automation-modal'>
                                                <p>Add new trigger</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className='flow_inner'>
                                    <AddNode isStart={true} />
                                    <li>
                                        <div className='workflow_card --blue --with-icon'>
                                            <div
                                                className='bubble'
                                                data-popover='popover'
                                                data-content="
                      <div className='workflow_actions'>
                        <ul className='list-inline'>
                          <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                          <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                          <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                        </ul>
                      </div>
                      ">
                                                <i className='far fa-envelope'></i>
                                                <p>E</p>
                                                <i className='icon-drag icon-resize-plus-2'></i>
                                            </div>
                                        </div>
                                    </li>
                                    <AddNode isEnd={true} />
                                </ul>
                            </li>
                            <li>
                                <ul className='flow_split'>
                                    <li>
                                        <div className='split-left'>
                                            <svg
                                                width='100%'
                                                height='100%'
                                                viewBox='0 0 100 100'
                                                preserveAspectRatio='none'>
                                                <path d='M 0,100 C 0,0 100,100 100,0'></path>
                                            </svg>
                                        </div>
                                        <ul className='flow_inner'>
                                            <li>
                                                <div className='workflow_card --yellow --with-icon'>
                                                    <div
                                                        className='bubble'
                                                        data-popover='popover'
                                                        data-content="
                          <div className='workflow_actions'>
                            <ul className='list-inline'>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                            </ul>
                          </div>
                          ">
                                                        <i className='fas fa-dollar-sign'></i>
                                                        <p>A</p>
                                                        <i className='icon-drag icon-resize-plus-2'></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <AddNode />
                                            <li>
                                                <div className='workflow_card --green --with-icon'>
                                                    <div
                                                        className='bubble'
                                                        data-popover='popover'
                                                        data-content="
                          <div className='workflow_actions'>
                            <ul className='list-inline'>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                            </ul>
                          </div>
                          ">
                                                        <i className='fas fa-sync-alt'></i>
                                                        <p>F</p>
                                                        <i className='icon-drag icon-resize-plus-2'></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <AddNode isEnd={true} />
                                        </ul>
                                    </li>
                                    <li>
                                        <div className='split-right'>
                                            <svg
                                                width='100%'
                                                height='100%'
                                                viewBox='0 0 100 100'
                                                preserveAspectRatio='none'>
                                                <path d='M 100,100 C 100,0 0,100 0,0'></path>
                                            </svg>
                                        </div>
                                        <ul className='flow_inner'>
                                            <li>
                                                <div className='workflow_card --red --with-icon'>
                                                    <div
                                                        className='bubble'
                                                        data-popover='popover'
                                                        data-content="
                          <div className='workflow_actions'>
                            <ul className='list-inline'>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                              <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                            </ul>
                          </div>
                          ">
                                                        <i className='far fa-clock'></i>
                                                        <p>B</p>
                                                        <i className='icon-drag icon-resize-plus-2'></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <AddNode isEnd={true} />
                                            <li>
                                                <ul className='flow_split'>
                                                    <li>
                                                        <div className='split-left'>
                                                            <svg
                                                                width='100%'
                                                                height='100%'
                                                                viewBox='0 0 100 100'
                                                                preserveAspectRatio='none'>
                                                                <path d='M 0,100 C 0,0 100,100 100,0'></path>
                                                            </svg>
                                                        </div>
                                                        <ul className='flow_inner'>
                                                            <li>
                                                                <div className='workflow_card--yes'>
                                                                    <span>
                                                                        Yes
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <AddNode />
                                                            <li>
                                                                <div className='workflow_card --white --with-icon'>
                                                                    <div
                                                                        className='bubble'
                                                                        data-popover='popover'
                                                                        data-content="
                                  <div className='workflow_actions'>
                                    <ul className='list-inline'>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                                    </ul>
                                  </div>
                                  ">
                                                                        <i className='far fa-clock'></i>
                                                                        <p>D</p>
                                                                        <i className='icon-drag icon-resize-plus-2'></i>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <AddNode />
                                                            <li>
                                                                <div className='workflow_card --green --with-icon'>
                                                                    <div
                                                                        className='bubble'
                                                                        data-popover='popover'
                                                                        data-content="
                                  <div className='workflow_actions'>
                                    <ul className='list-inline'>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                                    </ul>
                                  </div>
                                  ">
                                                                        <i className='fas fa-sync-alt'></i>
                                                                        <p>
                                                                            End
                                                                            of
                                                                            Automation.
                                                                        </p>
                                                                        <i className='icon-drag icon-resize-plus-2'></i>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className='split-right'>
                                                            <svg
                                                                width='100%'
                                                                height='100%'
                                                                viewBox='0 0 100 100'
                                                                preserveAspectRatio='none'>
                                                                <path d='M 100,100 C 100,0 0,100 0,0'></path>
                                                            </svg>
                                                        </div>
                                                        <ul className='flow_inner'>
                                                            <li>
                                                                <div className='workflow_card--no'>
                                                                    <span>
                                                                        No
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <AddNode />
                                                            <li>
                                                                <div className='workflow_card --grey --with-icon'>
                                                                    <div
                                                                        className='bubble'
                                                                        data-popover='popover'
                                                                        data-content="
                                  <div className='workflow_actions'>
                                    <ul className='list-inline'>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i className='icon icon-share-2'></i></a></li>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i className='icon icon-document-text'></i></a></li>
                                      <li><a href='#s' className='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i className='icon icon-trash'></i></a></li>
                                    </ul>
                                  </div>
                                  ">
                                                                        <i className='far fa-clock'></i>
                                                                        <p>C</p>
                                                                        <i className='icon-drag icon-resize-plus-2'></i>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <AddNode
                                                                isEnd={true}
                                                            />
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <aside className='hl_workflow--sidebar'>
                        <a href='#s' className='hide-sidebar' id='hide-sidebar'>
                            <i className='icon icon-arrow-right-1'></i>
                        </a>
                        <div className='hl_workflow--sidebar-header'>
                            <h2>Actions</h2>
                            <div className='search-form'>
                                <i className='icon icon-loupe'></i>
                                <input
                                    type='text'
                                    className='form-control form-light'
                                    placeholder='Search Actions'
                                />
                            </div>
                        </div>
                        <div className='hl_workflow--sidebar-inner'>
                            <div
                                className='accordion'
                                id='workflow-action-collapse'>
                                <div className='actions-set'>
                                    <a
                                        className='collapsed'
                                        data-toggle='collapse'
                                        href='#actions-set1'
                                        role='button'
                                        aria-expanded='false'
                                        aria-controls='actions-set1'>
                                        <span>Sending Options</span>
                                        <i className='caret icon-arrow-down-1'></i>
                                    </a>
                                    <div
                                        className='collapse'
                                        id='actions-set1'
                                        data-parent='#workflow-action-collapse'>
                                        <ul className='actions-list'>
                                            <DraggbleItem label='Send email' />
                                            <DraggbleItem label='Send a site message' />
                                            <DraggbleItem label='Send SMS' />
                                            <DraggbleItem label='Notify Someone' />
                                        </ul>
                                    </div>
                                </div>
                                <div className='actions-set'>
                                    <a
                                        className='collapsed'
                                        data-toggle='collapse'
                                        href='#actions-set2'
                                        role='button'
                                        aria-expanded='false'
                                        aria-controls='actions-set2'>
                                        <span>Conditions and workflow</span>
                                        <i className='caret icon-arrow-down-1'></i>
                                    </a>
                                    <div
                                        className='collapse'
                                        id='actions-set2'
                                        data-parent='#workflow-action-collapse'>
                                        <ul className='actions-list'>
                                            <li>
                                                <span>Wait</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>If / Else</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Split</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Go to</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Goal</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Start an automation</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>End this automation</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>
                                                    End other automation
                                                </span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Webhook</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='actions-set'>
                                    <a
                                        className='collapsed'
                                        data-toggle='collapse'
                                        href='#actions-set3'
                                        role='button'
                                        aria-expanded='false'
                                        aria-controls='actions-set3'>
                                        <span>Contacts</span>
                                        <i className='caret icon-arrow-down-1'></i>
                                    </a>
                                    <div
                                        className='collapse'
                                        id='actions-set3'
                                        data-parent='#workflow-action-collapse'>
                                        <ul className='actions-list'>
                                            <li>
                                                <span>Subscribe</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Unsubscribe</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Convert</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Update contact</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Add tag</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Remove tag</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Add note</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>
                                                    Add to Facebook Custom
                                                    Audience
                                                </span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>
                                                    Remove from Facebook Custom
                                                    Audience
                                                </span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Adjust score</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='actions-set'>
                                    <a
                                        className='collapsed'
                                        data-toggle='collapse'
                                        href='#actions-set4'
                                        role='button'
                                        aria-expanded='false'
                                        aria-controls='actions-set4'>
                                        <span>CRM</span>
                                        <i className='caret icon-arrow-down-1'></i>
                                    </a>
                                    <div
                                        className='collapse'
                                        id='actions-set4'
                                        data-parent='#workflow-action-collapse'>
                                        <ul className='actions-list'>
                                            <li>
                                                <span>Add deal</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Update title</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Update status</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Update owner</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Update value</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Update stage</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Update custom field</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Add task</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Add note</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Complete task</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                            <li>
                                                <span>Adjust score</span>
                                                <i className='icon icon-resize-plus-2'></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div
                        className='modal fade new-automation-modal'
                        id='new-automation-modal'
                        tabIndex={-1}
                        role='dialog'
                        aria-labelledby='new-automation-modalLabel'>
                        <div className='modal-dialog --mid2' role='document'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <div className='modal-header--inner'>
                                        <h5
                                            className='modal-title'
                                            id='new-automation-modalLabel'>
                                            Create a New Automation
                                        </h5>
                                        <div className='search-form'>
                                            <i className='icon icon-loupe'></i>
                                            <input
                                                type='text'
                                                className='form-control form-light'
                                                placeholder='Search Recipes'
                                            />
                                        </div>
                                        <button
                                            type='button'
                                            className='close'
                                            data-dismiss='modal'
                                            aria-label='Close'>
                                            <span aria-hidden='true'>
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className='modal-body'>
                                    <div className='categories-menu'>
                                        <ul className='recipe-stats'>
                                            <li>
                                                <span>
                                                    <i className='icon icon-heart'></i>
                                                    Favorites
                                                </span>
                                                <span className='number'>
                                                    1
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className='icon icon-cart'></i>
                                                    Purchased
                                                </span>
                                                <span className='number'>
                                                    0
                                                </span>
                                            </li>
                                        </ul>
                                        <hr />
                                        <h4>Categories</h4>
                                        <ul
                                            className='categories-menu-list accordion'
                                            id='categories-menu-list'>
                                            <li>
                                                <a href='#s'>All Recipe</a>
                                            </li>
                                            <li>
                                                <a href='#s'>
                                                    Start from Scratch
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#s'>Recommended</a>
                                            </li>
                                            <li>
                                                <a
                                                    className='collapse-nav collapsed'
                                                    data-toggle='collapse'
                                                    href='#categories-collapse1'
                                                    role='button'>
                                                    <span>
                                                        Increase Revenue
                                                    </span>
                                                    <i className='caret icon-arrow-down-1'></i>
                                                </a>
                                                <ul
                                                    className='collapse'
                                                    id='categories-collapse1'
                                                    data-parent='#categories-menu-list'>
                                                    <li>
                                                        <a href='#s'>
                                                            Prospect Follow-up
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#s'>
                                                            Customer Follow-up
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className='collapse-nav collapsed'
                                                    data-toggle='collapse'
                                                    href='#categories-collapse2'
                                                    role='button'>
                                                    <span>
                                                        Increase Traffic
                                                    </span>
                                                    <i className='caret icon-arrow-down-1'></i>
                                                </a>
                                                <ul
                                                    className='collapse'
                                                    id='categories-collapse2'
                                                    data-parent='#categories-menu-list'>
                                                    <li>
                                                        <a href='#s'>
                                                            Increase Referrals
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#s'>
                                                            Grow Your Community
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className='collapse-nav collapsed'
                                                    data-toggle='collapse'
                                                    href='#categories-collapse3'
                                                    role='button'>
                                                    <span>
                                                        Automate Sales Team
                                                    </span>
                                                    <i className='caret icon-arrow-down-1'></i>
                                                </a>
                                                <ul
                                                    className='collapse'
                                                    id='categories-collapse3'
                                                    data-parent='#categories-menu-list'>
                                                    <li>
                                                        <a href='#s'>
                                                            Automate Sales
                                                            Pipeline
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#s'>
                                                            Lead Scoring
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className='collapse-nav collapsed'
                                                    data-toggle='collapse'
                                                    href='#categories-collapse4'
                                                    role='button'>
                                                    <span>
                                                        Boost Contact
                                                        Satisfaction
                                                    </span>
                                                    <i className='caret icon-arrow-down-1'></i>
                                                </a>
                                                <ul
                                                    className='collapse'
                                                    id='categories-collapse4'
                                                    data-parent='#categories-menu-list'>
                                                    <li>
                                                        <a href='#s'>
                                                            Strengthen
                                                            Relationship
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#s'>
                                                            Customer Support
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className='collapse-nav collapsed'
                                                    data-toggle='collapse'
                                                    href='#categories-collapse5'
                                                    role='button'>
                                                    <span>
                                                        Manage & Track Contacts
                                                    </span>
                                                    <i className='caret icon-arrow-down-1'></i>
                                                </a>
                                                <ul
                                                    className='collapse'
                                                    id='categories-collapse5'
                                                    data-parent='#categories-menu-list'>
                                                    <li>
                                                        <a href='#s'>
                                                            Contact Scoring
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#s'>
                                                            Contact Management
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#s'>
                                                            Track Contacts
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#s'>
                                                            Apply Interest Tags
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <a
                                                href='#'
                                                className='btn btn-primary btn-block'>
                                                Discover More Recipes
                                            </a>
                                        </p>
                                    </div>
                                    <div className='automation-import'>
                                        <a href='#s' className='btn btn-light3'>
                                            <i className='icon icon-share-1'></i>
                                            Import Automation
                                        </a>
                                    </div>
                                    <div className='automation-continue'>
                                        <a
                                            href='#s'
                                            className='btn btn-success'>
                                            Continue
                                        </a>
                                    </div>
                                    <div className='automation-list-wrap'>
                                        <ul
                                            className='automation-list'
                                            id='automation-list'>
                                            <li className='active'>
                                                <h3>Start from Scratch</h3>
                                                <p>
                                                    Start from scratch with a
                                                    fresh, clean slate for your
                                                    automation and add your own
                                                    triggers and actions.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Start from Scratch
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Product Interest Targeted
                                                    Follow-up
                                                </h3>
                                                <p>
                                                    Deliver messages that align
                                                    with the product a contact
                                                    is interested in. It begins
                                                    when a product interest tag
                                                    is applied. It should send
                                                    content and offers that are
                                                    related to that product
                                                    interest so you can
                                                    strengthen your relationship
                                                    with the contact and
                                                    incentivize them to make a
                                                    purchase.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up,
                                                    Recommended
                                                </p>
                                                <span className='favorite active'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Part 1 - Engagement Tagging
                                                </h3>
                                                <p>
                                                    Keep up-to-date tags on your
                                                    contacts based on their
                                                    engagement level. These tags
                                                    are useful for analytics,
                                                    segmentation, and list
                                                    hygiene. Import Part 1 of
                                                    this two part automation
                                                    first. Both automations must
                                                    be imported for them to
                                                    work.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Recommended, Track Contacts
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Part 2 - Engagement Tagging
                                                </h3>
                                                <p>
                                                    Keep up-to-date tags on your
                                                    contacts based on their
                                                    engagement level. These tags
                                                    are useful for analytics,
                                                    segmentation, and list
                                                    hygiene. Import Part 1 of
                                                    this two part automation
                                                    first. Both automations must
                                                    be imported for them to
                                                    work.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Recommended, Track Contacts
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Product Interest Tagging
                                                </h3>
                                                <p>
                                                    Tag contacts who have
                                                    repeatedly visited a product
                                                    page on your website. If
                                                    they visit the product page
                                                    two to five times they are
                                                    tagged as "Interested in
                                                    Product X." If they visit
                                                    six or more times they are
                                                    tagged as "Very interested
                                                    in Product X." Use these
                                                    tags to segment and send
                                                    targeted offers. Set up Site
                                                    Tracking before you import
                                                    this recipe.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Apply Interest Tags,
                                                    Recommended
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Upgrade Incentive and
                                                    Outreach
                                                </h3>
                                                <p>
                                                    Send a series of emails to
                                                    contacts that have viewed
                                                    your upgrade page. The
                                                    automation ends when they
                                                    have made a purchase. This
                                                    begins a conversation with
                                                    your contact giving you a
                                                    chance to address their
                                                    concerns. You also gain
                                                    valuable insight into your
                                                    customers' pre-purchase
                                                    hang-ups, so that you can
                                                    improve your marketing copy
                                                    and purchase process.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Accessory Upsell After
                                                    Purchase
                                                </h3>
                                                <p>
                                                    Make sure your contacts have
                                                    everything they need to
                                                    complete their product
                                                    experience. If a customer
                                                    purchases a product, but
                                                    does not purchase the
                                                    accessory, send them an
                                                    email to ask if they want to
                                                    add that accessory item to
                                                    their order before it ships.
                                                    You may want to incentivize
                                                    this with a coupon or free
                                                    shipping.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    "Forward a Campaign"
                                                    Incentive
                                                </h3>
                                                <p>
                                                    Reward your contacts for
                                                    forwarding your email
                                                    campaigns. Once a contact
                                                    forwards your campaign, they
                                                    will get an email with a
                                                    coupon or other offer. To
                                                    encourage this, you could
                                                    place a call to action at
                                                    the bottom of all your email
                                                    campaigns. The incentive
                                                    will encourage sharing and
                                                    increase purchase frequency.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Grow Your Community,
                                                    Increase Referrals
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    "Share a Campaign on Social
                                                    Media" Incentive
                                                </h3>
                                                <p>
                                                    Reward your contacts for
                                                    sharing your campaign on
                                                    social media. To encourage
                                                    this, include a call to
                                                    action at the bottom of your
                                                    email campaigns. Once a
                                                    contact shares the campaign
                                                    on social media, they get an
                                                    email with the incentive
                                                    offered. Rewarding them with
                                                    a coupon will motivate them
                                                    to share and increase
                                                    purchase frequency.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Grow Your Community,
                                                    Increase Referrals
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Invite to Follow When
                                                    Referred by a Social Media
                                                    Site
                                                </h3>
                                                <p>
                                                    If a contact visits your
                                                    site from a social media
                                                    service (like Twitter or
                                                    Facebook), send an email
                                                    inviting them to follow you
                                                    on social media. You could
                                                    easily add additional social
                                                    networks—just make sure to
                                                    use the referring domain (as
                                                    it is often not the domain
                                                    of the network’s website).
                                                    Set up Site Tracking before
                                                    importing this recipe.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Grow Your Community
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    On Reply, Create a Task to
                                                    Respond
                                                </h3>
                                                <p>
                                                    Stay organized and on top of
                                                    follow-up for your open
                                                    deals. When a contact with
                                                    an open deal emails you,
                                                    automatically create a task
                                                    that reminds you to reply.
                                                    Before importing this
                                                    recipe, you'll need to
                                                    connect your email account
                                                    Settings Deals Add IMAP
                                                    Account.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Re-engagement Campaign
                                                    Triggered by "Disengaged"
                                                    Tag
                                                </h3>
                                                <p>
                                                    When a contact is tagged as
                                                    “Disengaged,” send a
                                                    re-engagement campaign. If
                                                    they don't open or click a
                                                    link within that
                                                    re-engagement campaign, it
                                                    will unsubscribe them. This
                                                    will keep your
                                                    deliverability high and
                                                    prevent you from annoying
                                                    people who aren't interested
                                                    in what you send.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Management,
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    "Need Help?" Message
                                                    Triggered on Visit to Help
                                                    Docs
                                                </h3>
                                                <p>
                                                    Send out a "How can I help
                                                    you?" email after a contact
                                                    visits your help
                                                    documentation. If they are a
                                                    customer, they get an email
                                                    from customer support. If
                                                    they aren't a customer, they
                                                    get an email (replies go to
                                                    your sales team).
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Support
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Customer Service Follow-up
                                                </h3>
                                                <p>
                                                    If a contact is given the
                                                    tag "Customer service
                                                    follow-up," a follow-up
                                                    email is sent after one day.
                                                    If the customer clicks the
                                                    "not resolved" link, it will
                                                    tell your support team to
                                                    reach out to them, and
                                                    redirect the contact to a
                                                    form to collect more
                                                    information. If they click
                                                    the "resolved" link, it will
                                                    remove the tag. You could
                                                    apply the "Customer service
                                                    follow-up" tag with Zapier
                                                    by integrating with your
                                                    help desk app.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Support
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Deduct Points for
                                                    Unsubscribing From a List
                                                </h3>
                                                <p>
                                                    Deduct points each time a
                                                    contact unsubscribes from
                                                    your list. The point value
                                                    is a suggestion. You'll want
                                                    to edit it to what makes
                                                    sense for your score.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Scoring, Lead
                                                    Scoring
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Add Points on Form Submits
                                                </h3>
                                                <p>
                                                    Add points to a score each
                                                    time a form is submitted.
                                                    This might be used to add
                                                    points each time a lead
                                                    magnet form is submitted.
                                                    The point value is a
                                                    suggestion. You'll want to
                                                    edit it to what makes sense
                                                    for your score.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Scoring, Lead
                                                    Scoring
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Add Points for Campaign Link
                                                    Clicks
                                                </h3>
                                                <p>
                                                    Add points to a score any
                                                    time an email link is
                                                    clicked. The point value is
                                                    a suggestion. You'll want to
                                                    edit it to what makes sense
                                                    for your score.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Scoring, Lead
                                                    Scoring
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Add Points for Email Opens
                                                </h3>
                                                <p>
                                                    Add points to a score each
                                                    time a campaign is opened.
                                                    The point value is a
                                                    suggestion. You'll want to
                                                    edit it to what makes sense
                                                    for your score.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Scoring, Lead
                                                    Scoring
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Add Points for Page Views
                                                </h3>
                                                <p>
                                                    Add points to a score each
                                                    time a contact visits any
                                                    page on your website. The
                                                    point value is a suggestion.
                                                    You'll want to edit it to
                                                    what makes sense for your
                                                    score.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Scoring, Lead
                                                    Scoring
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Add Points on Visits to an
                                                    Important Page
                                                </h3>
                                                <p>
                                                    Add points to a score when a
                                                    specific, important page of
                                                    your website is visited. You
                                                    might set this to be your
                                                    pricing page, your shopping
                                                    cart, or any other important
                                                    page of your site. The point
                                                    value is a suggestion.
                                                    You'll want to edit it to
                                                    what makes sense for your
                                                    score.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Scoring, Lead
                                                    Scoring
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Ecourse Delivery</h3>
                                                <p>
                                                    Create an ecourse drip
                                                    delivered by email. You can
                                                    use the ecourse as an
                                                    incentive to get more opt-in
                                                    subscribers. The messages in
                                                    the ecourse give you a
                                                    chance to provide helpful
                                                    information. This will help
                                                    you strengthen your
                                                    relationship with the
                                                    contact, position you as an
                                                    expert, and give you an
                                                    opportunity to introduce
                                                    your products or services.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Opt-in Incentive Delivery
                                                </h3>
                                                <p>
                                                    Give your contacts a reason
                                                    to join your list. Offer
                                                    something valuable in
                                                    exchange for their contact
                                                    information and then deliver
                                                    the opt-in incentive
                                                    automatically when they are
                                                    subscribed. You can offer a
                                                    free ebook, whitepaper, or
                                                    video. The more valuable it
                                                    is, the better it will work.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Identify Possible Advocates
                                                </h3>
                                                <p>
                                                    If someone returns to your
                                                    site over and over, it's
                                                    safe to assume they're a
                                                    fan. Apply a tag to keep
                                                    track of repeat visitors.
                                                    You could use this tag to
                                                    begin a follow-up sequence
                                                    that nurtures the
                                                    relationship and encourages
                                                    advocacy.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Grow Your Community
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Webinar Reminder Series</h3>
                                                <p>
                                                    Maximize your webinar
                                                    attendance by using this
                                                    automation to remind your
                                                    contacts it's coming. In
                                                    this example, reminders are
                                                    sent at 30 days, 14 days, 7
                                                    days, the day before, and
                                                    day of the event—but you
                                                    could easily modify it to
                                                    whatever intervals you think
                                                    will work best. Before
                                                    importing this recipe, build
                                                    a Date-based Custom Field
                                                    for the webinar date.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Send New Blog Posts</h3>
                                                <p>
                                                    Use RSS to automatically
                                                    send out your newest blog
                                                    when your feed is updated.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Customer Win Back Sequence
                                                </h3>
                                                <p>
                                                    When a “Canceled” tag is
                                                    applied to a contact due to
                                                    them cancelling your
                                                    service, send emails that
                                                    invite the customer to
                                                    return. The messages are
                                                    delivered at intervals after
                                                    canceling and can be edited
                                                    to what makes sense for your
                                                    business. You could apply
                                                    the "Canceled" tag with a
                                                    service such as Zapier.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Failed Billing Reminders
                                                </h3>
                                                <p>
                                                    When a tag is applied
                                                    indicating a customer's
                                                    billing has failed, deliver
                                                    reminders to update their
                                                    payment. This tag could be
                                                    added manually, or by a
                                                    third party integration.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Invitation to Talk on Repeat
                                                    Views of Pricing Page
                                                </h3>
                                                <p>
                                                    Invite contacts who
                                                    repeatedly visit your
                                                    pricing page to schedule an
                                                    appointment. If they do
                                                    schedule an appointment,
                                                    create a deal record so you
                                                    can keep leads organized.
                                                    Use this along with a
                                                    scheduling solution like
                                                    Calendly or Acuity.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Welcome Series</h3>
                                                <p>
                                                    Send a small welcome series
                                                    to new contacts as soon as
                                                    they are added to your list.
                                                    After a few days, we’ll
                                                    check to see if they opened
                                                    the welcome email. If so,
                                                    we’ll send them a follow-up
                                                    message with a little more
                                                    depth. If not, we’ll send
                                                    them a reworking of the
                                                    welcome email with a new
                                                    subject line and slightly
                                                    different messaging.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Recommended, Strengthen
                                                    Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Sync Deal Fields From Form
                                                    Submit
                                                </h3>
                                                <p>
                                                    Gather information from a
                                                    form submit to be entered
                                                    into the contact’s deal
                                                    record, allowing you to
                                                    store specific data on each
                                                    deal allowing informed
                                                    decisions regarding your
                                                    sales funnel. Before
                                                    importing this recipe, build
                                                    the following:
                                                    ActiveCampaign form, deal
                                                    custom fields that match the
                                                    form contact fields.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Management
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Won Deal Metrics</h3>
                                                <p>
                                                    Upon winning a deal, the
                                                    deal owner is sent an email
                                                    containing a form link to
                                                    identify what drove the
                                                    sale. This information is
                                                    then added to the won deal
                                                    and can be used to further
                                                    shape your evolving sales
                                                    plan. Before importing this
                                                    recipe, build the following:
                                                    ActiveCampaign form, Won
                                                    Reason deal custom field of
                                                    your chosen type, Won Reason
                                                    contact custom field of the
                                                    same type.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Lost Deal Metrics</h3>
                                                <p>
                                                    When a deal is marked Lost,
                                                    send out an email to the
                                                    contact thanking them for
                                                    their time and asking them
                                                    to fill out a short survey
                                                    of what were the factors in
                                                    their decision. You could
                                                    use this data to further
                                                    shape your evolving sales
                                                    plan. Alternatively, you
                                                    could use a Notify Someone
                                                    step instead of the Send
                                                    Email step to ask the deal
                                                    owner if you would prefer
                                                    not to follow up with a lost
                                                    deal directly. Before
                                                    importing this recipe, build
                                                    the following:
                                                    ActiveCampaign Form, Lost
                                                    Reason deal custom field of
                                                    your chosen type, Lost
                                                    Reason contact custom field
                                                    of the same type.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Notify When Deal Has Not
                                                    Closed
                                                </h3>
                                                <p>
                                                    Alert your deal owner when a
                                                    deal has not closed by your
                                                    anticipated close date. This
                                                    allows the deal owner to
                                                    then either double down
                                                    their efforts to win the
                                                    deal, denote a cold lead, or
                                                    mark the deal as lost. A tag
                                                    is then added that the deal
                                                    exceeded the forecast so
                                                    that the expected close time
                                                    can be realistically
                                                    adjusted. Before importing
                                                    this recipe, build the
                                                    following: A date-based deal
                                                    custom field for expected
                                                    close date.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Sync Deal Field Changes</h3>
                                                <p>
                                                    Update deal fields when
                                                    their corresponding contact
                                                    custom field is updated,
                                                    such as with a form
                                                    submission. This allows you
                                                    to store updated data on
                                                    each deal to make informed
                                                    decisions regarding your
                                                    sales funnel.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Management
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Tagging Based on Custom
                                                    Fields
                                                </h3>
                                                <p>
                                                    After a form submit, the
                                                    contact will travel down a
                                                    series of actions that check
                                                    for the value in the
                                                    selected form field. A tag
                                                    is then generated based on
                                                    the value present in the
                                                    custom field. Before
                                                    importing this recipe, build
                                                    the following:
                                                    ActiveCampaign form.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Management
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Abandoned Cart Reminder</h3>
                                                <p>
                                                    Send out an email to
                                                    contacts who abandon a cart.
                                                    Include an Abandoned Cart
                                                    block in the email sent out
                                                    to show the product
                                                    information of what they had
                                                    abandoned. This is a
                                                    powerful tool to incentivize
                                                    contacts to finish their
                                                    purchase. eCommerce
                                                    integration is required.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up,
                                                    Recommended
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Frequently Abandoned Cart
                                                    Notification
                                                </h3>
                                                <p>
                                                    Tag contacts who have
                                                    abandoned a cart one or more
                                                    times. If they abandon the
                                                    cart three or more times
                                                    without ever making a
                                                    purchase, it notifies you
                                                    via email and creates a task
                                                    to call the contact and help
                                                    answer any questions they
                                                    may have.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    First Time Abandon Cart Hook
                                                </h3>
                                                <p>
                                                    Offer contacts who abandon a
                                                    cart for the first time a
                                                    special deal to recover the
                                                    cart. If they trigger the
                                                    automation again by
                                                    abandoning a cart, they are
                                                    sent a message about the
                                                    abandoned cart, but not the
                                                    special offer. This creates
                                                    an opportunity to convert
                                                    first time contacts to
                                                    customers.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    After Purchase Follow Up
                                                </h3>
                                                <p>
                                                    After a contact purchases a
                                                    product from you, you can
                                                    begin an automated follow up
                                                    sequence that increases
                                                    satisfaction by helping a
                                                    new customer gain as much
                                                    value as possible from their
                                                    purchase. Also known as an
                                                    onboarding sequence, you can
                                                    make the new customer aware
                                                    of resources available to
                                                    them, such as help documents
                                                    and support channels. You
                                                    can give them tips and
                                                    tricks for getting started,
                                                    and then send advanced
                                                    suggestions for getting the
                                                    most out of it.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up,
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Store Last Purchase Date
                                                </h3>
                                                <p>
                                                    This simple automation
                                                    stores the date of the last
                                                    purchase. This is useful for
                                                    triggering other automations
                                                    based on the date of last
                                                    purchase. The next
                                                    automation uses this date
                                                    field to remind someone it’s
                                                    time to make another
                                                    purchase. You can set an
                                                    “Advanced” condition on this
                                                    automation’s trigger so that
                                                    it only stores the date of a
                                                    certain product. Build a
                                                    date-based custom field
                                                    before importing this
                                                    recipe.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline,
                                                    Track Contacts
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Reminder to Re-purchase</h3>
                                                <p>
                                                    If you have a product that
                                                    needs to be replenished
                                                    after a certain amount of
                                                    time, you can send a
                                                    campaign to remind someone
                                                    that it’s probably time to
                                                    reorder. This can help you
                                                    decrease the time between
                                                    purchases and increase
                                                    customer lifetime value.
                                                    This automation is triggered
                                                    by a date field. You’ll need
                                                    a custom date field that
                                                    stores the date of last
                                                    purchase. You may want to
                                                    give an incentive to
                                                    motivate them to make the
                                                    purchase now rather than
                                                    putting it off.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Request for Review After
                                                    Purchase
                                                </h3>
                                                <p>
                                                    Reviews can be powerful
                                                    social proof. It shows that
                                                    people trust your store
                                                    and/or recommend a certain
                                                    product. It can help people
                                                    stay on your site rather
                                                    than seeking out third-party
                                                    reviews before making a
                                                    purchase.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Gather Feedback After
                                                    Purchase
                                                </h3>
                                                <p>
                                                    Asking for feedback after a
                                                    purchase allows you to
                                                    proactively address customer
                                                    concerns. You may learn
                                                    about an annoyance during
                                                    the checkout process, find
                                                    discrepancies in
                                                    expectations on shipping
                                                    times, or gain valuable
                                                    insight you can leverage
                                                    during your new customer
                                                    onboarding. Your unhappy
                                                    customers will help you
                                                    improve your business and
                                                    your happy customers will
                                                    give you testimonials you
                                                    can leverage to make your
                                                    marketing more effective.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up,
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Send A Notification on
                                                    Purchase
                                                </h3>
                                                <p>
                                                    You may want to receive
                                                    notifications when certain
                                                    products are purchased, or
                                                    you may need to notify an
                                                    employee or third-party,
                                                    such as a drop-shipper to
                                                    get an item in the mail.
                                                    This simple automation sends
                                                    a notification that will
                                                    attach details about the
                                                    contact who made the
                                                    purchase. You can specify
                                                    which products trigger the
                                                    automation by using the
                                                    segmenting options.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline,
                                                    Contact Management
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Reward Customers on 5th
                                                    Purchase
                                                </h3>
                                                <p>
                                                    You may want to reward your
                                                    best customers to further
                                                    cement their loyalty to your
                                                    company and encourage them
                                                    to evangelize. This
                                                    automation is triggered by
                                                    the fifth purchase, but it
                                                    could just as easily be
                                                    triggered by a certain
                                                    revenue amount by modifying
                                                    the Advanced condition on
                                                    the trigger.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Customer Follow-up,
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>7 Day Drip Series</h3>
                                                <p>
                                                    Deliver a series of messages
                                                    over the course of 7 days.
                                                    This framework can fit many
                                                    needs from building to a big
                                                    announcement to a series of
                                                    helpful tips for your
                                                    customers to remember.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>eCommerce Sales Drip</h3>
                                                <p>
                                                    Send a series of emails
                                                    encouraging contacts to
                                                    purchase your product.
                                                    Automatically organize the
                                                    contacts in this automation
                                                    based on if they purchase
                                                    during the series or not.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Determine Best Sales Drip
                                                </h3>
                                                <p>
                                                    Use a split action to have
                                                    contacts exposed to two
                                                    different sales cycles.
                                                    After a certain number of
                                                    contacts have passed through
                                                    the split action, a winner
                                                    is determined based on sales
                                                    driven results. Apply what
                                                    you have discovered about
                                                    what works to later sales
                                                    messaging.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Prospect Follow-up
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Special Day Coupon</h3>
                                                <p>
                                                    Send your contacts a coupon
                                                    to celebrate a special day
                                                    such as a birthday or
                                                    anniversary. This is a nice
                                                    annual thank you to your
                                                    contacts and a reason for
                                                    them to engage again. Before
                                                    importing this recipe, build
                                                    a date-based custom field
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>Join Date Automation</h3>
                                                <p>
                                                    Send out an annual email to
                                                    your subscribers thanking
                                                    them. You can build out a
                                                    unique email for each year
                                                    and personalize them. This
                                                    is currently set up with the
                                                    steps for two years, but you
                                                    can keep building out as
                                                    needed.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Strengthen Relationship
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Special Offer Split - # of
                                                    Contacts
                                                </h3>
                                                <p>
                                                    Run a special offer to a
                                                    limited number of contacts,
                                                    based on form submittal.
                                                    After the desired number of
                                                    contacts have gone down the
                                                    path with the special offer,
                                                    any following contacts go
                                                    down a path with a different
                                                    message encouraging them to
                                                    try again on the next
                                                    special offer. Before
                                                    importing this recipe, build
                                                    an ActiveCampaign form.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Special Offer Split- Date
                                                    Based
                                                </h3>
                                                <p>
                                                    Run a special offer for a
                                                    limited time. When contacts
                                                    fill out your form for the
                                                    special offer, they will go
                                                    down a path with the offer
                                                    until the specified date and
                                                    time, then will go down a
                                                    path with a message letting
                                                    them know the offer has
                                                    passed. Before importing
                                                    this recipe, build an
                                                    ActiveCampaign form.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Automate Sales Pipeline
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Form Personalization
                                                    Follow-up
                                                </h3>
                                                <p>
                                                    Send a follow-up email based
                                                    on the choices a contact
                                                    makes on a form. This is a
                                                    great way to start
                                                    introducing personalization
                                                    early to your subscribers,
                                                    letting them know they will
                                                    only receive information
                                                    important to them. You could
                                                    specify your contact’s
                                                    industry, send specified
                                                    product information, or
                                                    gauge how familiar your
                                                    contact is with your
                                                    services.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Management
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                            <li>
                                                <h3>
                                                    Highly Engaged Customer
                                                    Feedback
                                                </h3>
                                                <p>
                                                    Identify your most engaged
                                                    contacts and send them an
                                                    email requesting any
                                                    ideas/feedback they may
                                                    have. Contacts who go the
                                                    extra mile and provide
                                                    feedback are then tagged for
                                                    segmenting.
                                                </p>
                                                <p className='category'>
                                                    <i className='fas fa-archive'></i>
                                                    Contact Management, Grow
                                                    Your Community
                                                </p>
                                                <span className='favorite'>
                                                    <i className='icon icon-heart-filled'></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default App
