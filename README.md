# MIMBCD-UI Cornerstone Touch Prototype

<img src="https://github.com/MIMBCD-UI/prototype-multi-modality/blob/master/assets/banner.png?raw=true"/>

In this repository, we present one of the used prototypes for our [User Tests and Analysis 1 (UTA1)]([https://github.com/MIMBCD-UI/meta/wiki/User-Research#test-4-single-modality-vs-multi-modality-](https://github.com/MIMBCD-UI/meta/wiki/User-Research#test-1-)) study. Work and results are published on a top [Human-Computer Interaction (HCI)](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction) conference named [ISS 2017](https://dl.acm.org/doi/proceedings/10.1145/3132272) ([page]([https://sites.google.com/unisa.it/avi2020](https://iss2017.acm.org/))). We also have several demos to see in our [YouTube Channel](https://www.youtube.com/channel/UCPz4aTIVHekHXTxHTUOLmXw), please follow us.

## Citing

We kindly ask **scientific works and studies** that make use of the repository to cite it in their associated publications. Similarly, we ask **open-source** and **closed-source** works that make use of the repository to warn us about this use.

You can cite our work using the following BibTeX entry:

```
@inproceedings{10.1145/3132272.3134111,
author = {Calisto, Francisco M. and Ferreira, Alfredo and Nascimento, Jacinto C. and Gon\c{c}alves, Daniel},
title = {Towards Touch-Based Medical Image Diagnosis Annotation},
year = {2017},
isbn = {9781450346917},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3132272.3134111},
doi = {10.1145/3132272.3134111},
abstract = {A fundamental step in medical diagnosis for patient follow-up relies on the ability of radiologists to perform a trusty diagnostic from acquired images. Basically, the diagnosis strongly depends on the visual inspection over the shape of the lesions. As datasets increase in size, such visual evaluation becomes harder. For this reason, it is crucial to introduce easy-to-use interfaces that help the radiologists to perform a reliable visual inspection and allow the efficient delineation of the lesions. We will explore the radiologist's receptivity to the current touch environment solution. The advantages of touch are threefold: (i) the time performance is superior regarding the traditional use, (ii) it has more intuitive control and, (iii) for less time, the user interface delivers more information per action, concerning annotations. From our studies, we conclude that the radiologists still exhibit a resistance to change from traditional to touch based interfaces in current clinical setups.},
booktitle = {Proceedings of the 2017 ACM International Conference on Interactive Surfaces and Spaces},
pages = {390–395},
numpages = {6},
keywords = {Human-Computer Interaction, Interaction Design, Medical Image Diagnosis, Medical Visualization, Touch-Based},
location = {Brighton, United Kingdom},
series = {ISS '17}
}
```

## Instructions

First of all, you will need [NodeJS](https://nodejs.org/) installed locally on your machine. This project needs both [`npm`](https://www.npmjs.com/) and [`http-server`](https://github.com/indexzero/http-server) dependencies to install and run the core project. If you do not have those installed please follow the [`INSTALL`](src/INSTALL.md) instructions.

### DICOM Server

The following assumes you will be using a [git](https://git-scm.com/) version control for this repository, storing thanks to [GitHub](https://github.com/). First, [Download](https://git-scm.com/downloads) and [Install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) [git](https://git-scm.com/). Our system needs to be integrated with [WADO-URI](http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html) servers, [DICOMWeb](https://www.dicomstandard.org/dicomweb/) servers or any HTTP based server that returns a [DICOM P10](http://www.web3.lu/dicom-standard/) instances. We suggest you to use an [Orthanc](https://www.orthanc-server.com/) server, since it is a simple and powerful [**standalone DICOM server**](https://www.orthanc-server.com/static.php?page=about) by providing a [**RESTful API**](https://en.wikipedia.org/wiki/Representational_state_transfer).

You can [download](https://www.orthanc-server.com/download.php) a latest version or you can use our own sample of an [Orthanc](https://www.orthanc-server.com/) version with our examples of patient images. The instructions to use our solution are as follows.

#### Clone

1.1.1. Clone the DICOM Server [repository](https://github.com/MIMBCD-UI/dicom-server):

```
git clone git@github.com:MIMBCD-UI/dicom-server.git
```

1.1.2. Go inside the project folder:

```
cd dicom-server/
```

#### Install

1.2.1. Install the local dependencies:

```
npm install
```

1.2.2. You can now **Run** the project, just follow the [next section](https://github.com/MIMBCD-UI/prototype-cornerstone-touch#run).

#### Run

1.3.1. Inside the project folder:

```
cd dicom-server
```

1.3.2. Start the DICOM Server (Orthanc) for [MacOS](https://www.orthanc-server.com/static.php?page=download-mac):

```
npm run start:single
```

**OR**

```
cd ..
cd dicom-server/orthancAndPluginsOSX.stable/
./startOrthanc.command
```

**NOTE**: If you are not using [MacOS](https://www.orthanc-server.com/static.php?page=download-mac), for instance, if you are using [Windows](https://www.orthanc-server.com/download-windows.php) or [Debian](https://packages.debian.org/search?keywords=orthanc&searchon=names&exact=1&suite=all&section=all) you have a [documentation](https://www.orthanc-server.com/static.php?page=documentation) for that. Just follow the [Windows](https://www.orthanc-server.com/resources/2015-02-09-emsy-tutorial/index.html) or [Debian](https://packages.debian.org/sid/orthanc) documentations. You also have several [other options](https://www.orthanc-server.com/download.php).

1.3.3. Open the link:

```
localhost:8248
```

NOTE: If you need some help see the [Demo](https://youtu.be/tkzpT3KpY2A).

### Main Server

Our main server uses [NodeJS](https://nodejs.org/en/) and has several [dependencies](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/blob/master/package.json). For the following steps you must have already installed both [NodeJS](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) in your machine.

#### Clone

2.1.1. Clone the project repository:

```
git clone git@github.com:MIMBCD-UI/prototype-cornerstone-touch.git
```

2.1.2. Go inside the project folder:

```
cd prototype-cornerstone-touch/
```

##### Allow-Control-Allow-Origin

Access-Control-Allow-Origin is a [CORS (Cross-Origin Resource Sharing) header](https://www.html5rocks.com/en/tutorials/cors/). If you want to know [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work) follow the link.

###### Google Chrome

* To deal with the CORS issue it is necessary to open [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/) with `--disable-web-security` flag on:

```
open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir
```

* Or install the  [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) plugin for [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/).


## About

For more information about the [MIMBCD-UI](https://mimbcd-ui.github.io/) Project just follow the [link](https://github.com/MIMBCD-UI/meta). Pieces of information about details of this repository are also in a [wiki](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/wiki). This prototype was developed using several libraries and dependencies. Despite that all libraries had their importance and supported the development, one of it was of chief importance. The [CornerstoneJS](https://cornerstonejs.org/) library and [secondary libraries](https://github.com/cornerstonejs), respectively, are supporting this prototype. We [Acknowledge](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/blob/master/README.md#acknowledgments) all people involved in the path.

### License

Copyright © 2017 [Instituto Superior Técnico (IST)](https://tecnico.ulisboa.pt/)

The [`prototype-cornerstone-touch`](https://github.com/MIMBCD-UI/prototype-cornerstone-touch) repository is distributed under the terms of both [Academic License](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/blob/master/ACADEMIC.md) and [Commercial License](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/blob/master/COMMERCIAL.md), for academic and commercial purpose, respectively. For more information regarding the [License](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/blob/master/LICENSE.md) of the hereby repository, just follow both [`ACADEMIC.md`](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/blob/master/ACADEMIC.md) and [`COMMERCIAL.md`](https://github.com/MIMBCD-UI/prototype-cornerstone-touch/blob/master/COMMERCIAL.md) files.

#### Copyright

When source code, documentation and other content is contributed to one of our repositories, the copyrights in those contributions remain owned by the original copyright holders. The copyrights are not assigned to the organization itself. Instead, they are licensed for distribution as part of the project. Whether a project uses new incremental solutions, the original copyright holders retain their copyrights.

#### Intellectual Property

The content of the present repository has obtained the patent right of [World Intellectual Property Organization (WIPO)](https://www.wipo.int) invention. Moreover, the hereby invention of the [`prototype-cornerstone-touch`](https://github.com/MIMBCD-UI/prototype-cornerstone-touch) repository is under protection of the patent number **[WO2022071818A1](https://patents.google.com/patent/WO2022071818A1)** with the application number **PCT/PT2021/050029**. The title of the invention is "*Computational Method and System for Improved Identification of Breast Lesions*", registered under the WO patent office.

### Acknowledgments

This work was partially supported by national funds through [FCT](http://fct.pt/) and [IST](http://tecnico.ulisboa.pt/) through the [UID/EEA/50009/2013](https://www.fct.pt/apoios/projectos/consulta/vglobal_projecto.phtml.en?idProjecto=147329&idElemConcurso=8999) project, [BL89/2017-IST-ID](http://ist-id.pt/en/) grant. We thank [Dr. Clara Aleluia](https://www.researchgate.net/profile/Clara_Aleluia) and her [radiology team](https://repositorio.hff.min-saude.pt/handle/10400.10/4?locale=en) of [HFF](https://hff.min-saude.pt/) for valuable insights and helping using the *Assistant* on their daily basis. From [IPO-Lisboa](http://www.ipolisboa.min-saude.pt/), we would like to thank the medical imaging teams of [Dr. José Carlos Marques](https://www.researchgate.net/profile/Jose_Marques42) and [Dr. José Venâncio](http://www.ipolisboa.min-saude.pt/servicosclinicos/radiologia/). From [IPO-Coimbra](https://ipocoimbra.com), we would like to thank the radiology department director and the all team of [Dr. Idílio Gomes](https://ipocoimbra.com/servico-de-imagiologia/). Also, we would like to provide our acknowledgments to Dr. Emília Vieira and Dr. Cátia Pedro from [Hospital Santa Maria](http://www.chln.min-saude.pt/). Furthermore, we want to thank all team from the radiology department of [HB](http://www.chbm.min-saude.pt/) for participation. Last but not least, a great thanks to [Dr. Cristina Ribeiro da Fonseca](http://imi.pt/pt/content/31-corpo-clnico/32-profissionais-imi?content=55), who among others is giving us crucial information for the [BreastScreening](https://github.com/BreastScreening) project.

A special thanks to [Chris Hafey](https://www.linkedin.com/in/chafey/), the propelling person of [CornerstoneJS](https://cornerstonejs.org/), who also developed the [cornerstoneDemo](https://github.com/chafey/cornerstoneDemo). Not forgetting the three supporters of the CornerstoneJS library, [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus), [Danny Brown](http://dannyrb.com/) and [Erik Ziegler](https://www.npmjs.com/~swederik). We also would like to give a special thanks to [Erik Ziegler](https://www.npmjs.com/~swederik) who support several [issues](https://groups.google.com/forum/#!forum/cornerstone-platform) during this path.

- [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus) ([adreyfus](https://github.com/adreyfus))

- [Chris Hafey](https://www.linkedin.com/in/chafey/) ([chafey](https://github.com/chafey))

- [Danny Brown](http://dannyrb.com/) ([dannyrb](https://github.com/dannyrb))

- [Erik Ziegler](https://www.npmjs.com/~swederik) ([swederik](https://github.com/swederik))

- [Jason Hostetter](http://www.jasonhostetter.com/)

- [Marcelo Ribeiro](http://www.sysline.inf.br/) ([sysline](https://github.com/sysline))

- [Sébastien Jodogne](https://www.linkedin.com/in/jodogne/) ([jodogne](https://github.com/jodogne))

- [Steve Pieper](https://lmi.med.harvard.edu/people/steve-pieper)

### Supporting

Our organization is a non-profit organization. However, we have many needs across our activity. From infrastructure to service needs, we need some time and contribution, as well as help, to support our team and projects.

<span>
  <a href="https://opencollective.com/oppr" target="_blank">
    <img src="https://opencollective.com/oppr/tiers/backer.svg" width="220">
  </a>
</span>

#### Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

<span class="image">
  <a href="graphs/contributors">
    <img src="https://opencollective.com/oppr/contributors.svg?width=890" />
  </a>
</span>

#### Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/oppr#backer)]

<span>
  <a href="https://opencollective.com/oppr#backers" target="_blank">
    <img src="https://opencollective.com/oppr/backers.svg?width=890">
  </a>
</span>

#### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/oppr#sponsor)]

<span>
  <a href="https://opencollective.com/oppr/sponsor/0/website" target="_blank">
    <img src="https://opencollective.com/oppr/sponsor/0/avatar.svg">
  </a>
</span>

<br />

<span>
  <a href="http://www.fct.pt/" title="FCT" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/fct_footer.png?raw=true" alt="fct" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.fccn.pt/en/" title="FCCN" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/fccn_footer.png?raw=true" alt="fccn" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.ulisboa.pt/en/" title="ULisboa" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/ulisboa_footer.png?raw=true" alt="ulisboa" width="20%" />
  </a>
</span>
<span>
  <a href="http://tecnico.ulisboa.pt/" title="IST" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/ist_footer.png?raw=true" alt="ist" width="20%" />
  </a>
</span>
<span>
  <a href="http://hff.min-saude.pt/" title="HFF" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/hff_footer.png?raw=true" alt="hff" width="20%" />
  </a>
</span>

##### Departments

<span>
  <a href="http://dei.tecnico.ulisboa.pt" title="DEI" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/dei_footer.png?raw=true" alt="dei" width="20%" />
  </a>
</span>
<span>
  <a href="http://deec.tecnico.ulisboa.pt" title="DEEC" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/deec_footer.png?raw=true" alt="dei" width="20%" />
  </a>
</span>

##### Laboratories

<span>
  <a href="http://sipg.isr.tecnico.ulisboa.pt/" title="SIPG" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/sipg_footer.png?raw=true" alt="sipg" width="20%" />
  </a>
</span>
<span>
  <a href="http://welcome.isr.tecnico.ulisboa.pt/" title="ISR" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/isr-lisboa_footer.png?raw=true" alt="isr" width="20%" />
  </a>
</span>
<span>
  <a href="http://larsys.pt/" title="LARSys" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/larsys_footer.png?raw=true" alt="larsys" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.m-iti.org/" title="M-ITI" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/iti_footer.png?raw=true" alt="iti" width="20%" />
  </a>
</span>
<span>
  <a href="http://www.inesc-id.pt/" title="INESC-ID" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/inesc-id_footer.png?raw=true" alt="inesc-id" width="20%" />
  </a>
</span>

##### Domain

<span>
  <a href="https://europa.eu/" title="EU" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/eu_footer.png?raw=true" alt="eu" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.portugal.gov.pt/" title="Portugal" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/pt_footer.png?raw=true" alt="pt" width="20%" />
  </a>
</span>
