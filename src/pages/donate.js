import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
        <Seo title="Donate" />

        <div className="container">
            <h1>Donate</h1>

            <p>
                One-time donation:{" "}
                <a href="https://github.com/sponsors/ajayyy-org?frequency=one-time">
                    GitHub
                </a>
                , <a href="https://paypal.me/ajayyy">Paypal</a>,{" "}
                <a href="bitcoin:bc1qvnjvuqycefz593pu6f2vpngml8ld9wjqd5qcus">
                    BTC
                </a>
            </p>

            <p>
                Recurring:{" "}
                <a href="https://github.com/sponsors/ajayyy-org">
                    GitHub
                </a>
                ,{" "}
                <a href="https://www.patreon.com/ajayyy">Patreon</a>
            </p>

            <hr noshade />

            <h4>Contributors</h4>

            <p>
                Also check out all the other contributors who have helped out
                with this project;{" "}
                <a href="https://github.com/ajayyy/DeArrow/graphs/contributors">
                    DeArrow contributors
                </a>
                ,{" "}
                <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">
                    SponsorBlockServer contributors
                </a>
                , {" "}
                <a href="https://github.com/ajayyy/DeArrowSite/graphs/contributors">
                    DeArrowSite contributors
                </a>
                , and replacement title and thumbnail contributors{" "}
                such as <a href="https://mchang.name/">Michael Chang</a>,{" "}
                <a href="https://github.com/mschae23">mschae23</a>,{" "}
                <a href="https://github.com/SuperManifolds">Alex Sørlie</a>,{" "}
                <a href="https://mlnr.dev/">cane</a>,{" "}
                UnventedManicotti,{" "}
                and more.
            </p>
        </div>
    </Layout>
);

export default IndexPage;
