import React from 'react';
import {HanzFullWidthContainer} from "../common/HanzFullWidthContainer";
import {HanzArticleContainer} from "../common/HanzArticleContainer";

import chaff_img from "../assets/img/article/chaff.png";
import survey_img from "../assets/img/article/survey.png"
import bio_img from "../assets/img/article/bio.png"
import flow_img from "../assets/img/article/flow.png"
import gain_img from "../assets/img/article/gain.png"
import dataflow_img from "../assets/img/article/dataflow.png"

export function Publications() {
    return (<div className="container">

            <div className="row">
                <HanzFullWidthContainer>
                    <div className="col">
                        <h1>Publications</h1>
                        <hr/>
                    </div>
                    <HanzArticleContainer img={survey_img} type="Journal" title="Security of Electrical, Optical and Wireless On-Chip
                        Interconnects: A Survey"
                                          venue="2023 ACM Transactions on Design Automation of Electronic Systems (TODAES)"
                                          text="The advancement of manufacturing technologies has enabled the integration of more intellectual property (IP) cores on the same system-on-chip (SoC). Scalable and high throughput on-chip communication architecture has become a vital component in today’s SoCs. Diverse technologies such as electrical, wireless, optical, and hybrid are available for on-chip communication with different architectures supporting them. On-chip communication sub-system is shared across all the IPs and continuously used throughout the lifetime of the SoC. Therefore, the security of the on-chip communication is crucial because exploiting any vulnerability would be a goldmine for an attacker. In this survey, we provide a comprehensive review of threat models, attacks and countermeasures over diverse on-chip communication technologies as well as sophisticated architectures."
                                          authors={['Hansika Weerasena', 'Prabath Mishra']}
                                          downloadLink="https://www.cise.ufl.edu/research/cad/Publications/host21noc.pdf"
                                          proceedingLink="https://dl.acm.org/doi/10.1145/3631117"
                    ></HanzArticleContainer>
                    <HanzArticleContainer img={chaff_img} type="Conference" title="Lightweight Encryption using Chaffing and Winnowing with All-or-Nothing
                            Transform for Network-on-Chip Architectures"
                                          venue="2021 IEEE International Symposium on Hardware Oriented Security and Trust (HOST)"
                                          text="Network-on-Chip (NoC) fulfills the communication requirements of modern System-on-Chip (SoC) architectures. Due to the resource-constrained nature of NoC-based SoCs, it is a major challenge to secure onchip communication against eavesdropping attacks using traditional encryption methods. In this paper, we propose a lightweight encryption technique using chaffing and winnowing (C&amp;W) with all-or-nothing transform (AONT) that benefits from the unique NoC traffic characteristics. Our experimental results demonstrate that our proposed encryption technique provides the required security with significantly less area and energy overhead compared to the state-of-the-art approaches."
                                          authors={['Hansika Weerasena', 'Subodha Charles', 'Prabath Mishra']}
                                          downloadLink="https://www.cise.ufl.edu/research/cad/Publications/host21noc.pdf"
                                          proceedingLink="https://ieeexplore.ieee.org/document/9702282"
                    ></HanzArticleContainer>
                    <HanzArticleContainer img={bio_img} type="Conference" title="Continuous Automatic Bioacoustics Monitoring of Bird Calls with Local Processing on Node Level"
                                          venue="Proceedings of TENCON 2018 - 2018 IEEE Region 10 Conference"
                                          text="In automatic bioacoustic monitoring it is important to do continuous observations to capture rare events, but storage and communication overheads typically prevent continuous realtime monitoring. To overcome this limitation, this paper presents a low complexity local processing method for acoustic signals targeting resource constrained nodes and preprocessing and segmentation techniques in line with the proposed local processing technique for effective and continuous identification of bird calls. This paper also focuses on designing of overall automatic bioacoustic monitoring system including feature extraction and classification. The proposed system with Two-windows method shows maximum accuracy of 93.85% when trained and tested using SVM classifier with 214 real world recordings containing calls of 5 bird species. Having local processing at node level has shown 43% reduction of space requirement at node level and 24% reduction of processing time."
                                          authors={['Hansika Weerasena', 'Manesh Jayawardhana', 'Dineth Egodage', 'Heshan Fernando', 'Sulochana Sooriyaarachchi', 'Chandana Gamagek', 'Navinda Kottege']}
                                          downloadLink="https://www.researchgate.net/profile/Sulochana-Sooriyaarachchi/publication/331848051_Continuous_Automatic_Bioacoustics_Monitoring_of_Bird_Calls_with_Local_Processing_on_Node_Level/links/5caab8d1a6fdcca26d065716/Continuous-Automatic-Bioacoustics-Monitoring-of-Bird-Calls-with-Local-Processing-on-Node-Level.pdf?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InB1YmxpY2F0aW9uIn19"
                                          proceedingLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8650196"
                    ></HanzArticleContainer>

                    <div className="col">
                        <h1>Preprints</h1>
                        <hr/>
                    </div>
                    <HanzArticleContainer img={dataflow_img} type="Preprint" title="Revealing CNN Architectures via Side-Channel Analysis in Dataflow-based Inference Accelerators"
                                          venue="2023 Nov"
                                          text="Convolution Neural Networks (CNNs) are widely used in various domains. Recent advances in dataflow-based CNN accelerators have enabled CNN inference in resource- constrained edge devices. These dataflow accelerators utilize inherent data reuse of convolution layers to process CNN models efficiently. Concealing the architecture of CNN models is critical for privacy and security. This paper evaluates memory-based side-channel information to recover CNN architectures from dataflow-based CNN inference accelerators. The proposed attack exploits spatial and temporal data reuse of the dataflow mapping on CNN accelerators and architectural hints to recover the structure of CNN models. Experimental results demonstrate that our proposed side-channel attack can recover the structures of popular CNN models, namely Lenet, Alexnet, and VGGnet16."
                                          authors={['Hansika Weerasena', 'Prabath Mishra']}
                                          downloadLink=""
                                          proceedingLink=""
                    ></HanzArticleContainer>
                    <HanzArticleContainer img={flow_img} type="Preprint" title="Breaking NoC Anonymity using Flow Correlation Attack"
                                          venue="2023 Sep"
                                          text="Network-on-Chip (NoC) is widely used as the internal communication fabric in today’s multicore System-onChip (SoC) designs. Security of the on-chip communication is crucial because exploiting any vulnerability in shared NoC would be a goldmine for an attacker. NoC security relies on effective countermeasures against diverse attacks. We investigate the security strength of existing anonymous routing protocols in NoC architectures. Specifically, this paper makes two important contributions. We show that the existing anonymous routing is vulnerable to machine learning (ML) based flow correlation attacks on NoCs. We propose a lightweight anonymous routing that use traffic obfuscation techniques which can defend against ML-based flow correlation attacks. Experimental studies using both real and synthetic traffic reveal that our proposed attack is successful against state-of-the-art anonymous routing in NoC architectures with a high accuracy (up to 99%) for diverse traffic patterns, while our lightweight countermeasure can defend against ML-based attacks with minor hardware and performance overhead."
                                          authors={['Hansika Weerasena', 'Pan Zhixin', 'Khushboo Rani', 'Prabath Mishra']}
                                          downloadLink="https://arxiv.org/pdf/2309.15687.pdf"
                                          proceedingLink=""
                    ></HanzArticleContainer>
                    <HanzArticleContainer img={gain_img} type="Preprint" title="Modeling and Exploration of Gain Competition Attacks in Optical Network-on-Chip Architectures"
                                          venue="2023 Mar"
                                          text="Network-on-Chip (NoC) enables energy-efficient communication between numerous components in System-on-Chip architectures. The optical NoC is widely considered a key technology to overcome the bandwidth and energy limitations of traditional electrical on-chip interconnects. While optical NoC can offer high performance, they come with inherent security vulnerabilities due to the nature of optical interconnects. In this paper, we investigate the gain competition attack in optical NoCs, which can be initiated by an attacker injecting a high-power signal to the optical waveguide, robbing the legitimate signals of amplification. To the best of our knowledge, our proposed approach is the first attempt to investigate gain competition attacks as a security threat in optical NoCs. We model the attack and analyze its effects on optical NoC performance. We also propose potential attack detection techniques and countermeasures to mitigate the attack. Our experimental evaluation using different NoC topologies and diverse traffic patterns demonstrates the effectiveness of our modeling and exploration of gain competition attacks in optical NoC architectures."
                                          authors={['Khushboo Rani', 'Hansika Weerasena', 'Stephen A. Butler', 'Subodha Charles', 'Prabhat Mishra']}
                                          downloadLink="https://arxiv.org/pdf/2303.01550.pdf"
                                          proceedingLink="https://arxiv.org/abs/2303.01550"
                    ></HanzArticleContainer>
                </HanzFullWidthContainer>

            </div>
        </div>
    );
}