import xray1 from '../../images/singleDetails/siemens-multiphos-15-x-ray-machine.jpeg';
import xray3 from '../../images/singleDetails/Siemens-Heliphor-DX-ray.jpeg';
import xray4 from '../../images/singleDetails/GE-Genius-100.jpeg';
import xray5 from '../../images/singleDetails/GE-Genius-300.jpeg';

const machineDetails = {
  xray: {
    heading: 'X Ray Machine',
    brands: [
      {
        name: 'Siemens',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'Siemens Multiphos 15 X-ray',
            image: xray1,
            specification: {
              Brand: 'Siemens',
              'Model Name/Number': 'Multiphos 15',
              'Machine Type': 'Fixed',
              Application: 'Diagnostic Imaging',
              'X-ray Tube': 'High Frequency',
              'Country of Origin': 'Made in Germany',
              'Output Power': '15kW',
              'kV Range': '40kV to 150kV',
            },
          },
          {
            model: 'Siemens Multimobile 2.5 X-ray',
            specification: {
              Brand: 'Siemens',
              'Model Name/Number': 'Multimobile 2.5',
              'Machine Type': 'Portable (Mobile)',
              'Operation Mode': 'Automatic',
              'X-ray Tube': '1.5mm X 1.5mm',
              'Output Wave': 'High Frequency',
              'Tube Head Angulations': 'Along X-Ray Tube Axis: +180 / -30',
              'mA Range': '13mA to 63mA',
              'Exposure Technique': 'Two Point Technique',
              'Country of Origin': 'Made in Germany',
              'kV Range': '40kV to 100kV',
            },
          },
          {
            model: 'Siemens Heliphor-D X-ray',
            image: xray3,
            specification: {
              Brand: 'Siemens',
              'Model Name/Number': 'Heliphor-D',
              'Machine Type': 'Fixed',
              Application: 'Diagnostic Imaging',
              'X-ray Tube': 'High Frequency',
              'Country of Origin': 'Made in Germany',
              'Output Power': '20kW',
              'kV Range': '40kV to 120kV',
            },
          },
          // {
          //   model: 'Siemens Phrliphos-D X-ray',
          //   specification: {
          //     Brand: 'Siemens',
          //     'Model Name/Number': 'Phrliphos-D',
          //     'Machine Type': 'Fixed',
          //     Application: 'Diagnostic Imaging',
          //     'X-ray Tube': 'High Frequency',
          //     'Country of Origin': 'Made in Germany',
          //     'Output Power': '18kW',
          //     'kV Range': '40kV to 110kV',
          //   },
          // },
        ],
      },
      {
        name: 'GE',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'GE Genius 100 X-ray',
            image: xray4,
            specification: {
              Brand: 'GE',
              'Model Name/Number': 'Genius 100',
              'Machine Type': 'Fixed',
              Application: 'Diagnostic Imaging',
              'X-ray Tube': 'High Frequency',
              'Country of Origin': 'Made in USA',
              'Output Power': '100kW',
              'kV Range': '40kV to 120kV',
            },
          },
          {
            model: 'GE Genius 300 X-ray',
            image: xray5,
            specification: {
              Brand: 'GE',
              'Model Name/Number': 'Genius 300',
              'Machine Type': 'Fixed',
              Application: 'Diagnostic Imaging',
              'X-ray Tube': 'High Frequency',
              'Country of Origin': 'Made in USA',
              'Output Power': '300kW',
              'kV Range': '40kV to 130kV',
            },
          },
          {
            model: 'GE Genius 500 X-ray',
            specification: {
              Brand: 'GE',
              'Model Name/Number': 'Genius 500',
              'Machine Type': 'Fixed',
              Application: 'Diagnostic Imaging',
              'X-ray Tube': 'High Frequency',
              'Country of Origin': 'Made in USA',
              'Output Power': '500kW',
              'kV Range': '40kV to 150kV',
            },
          },
        ],
      },
    ],
  },
  ctscan: {
    heading: 'Ct Scan Machine',
    brands: [
      {
        name: 'Siemens',
        models: [
          {
            count: '3',
            version: 'v1.3',
            model: 'Siemens Emotion 16 Slice CT Scanner',
            specification: {
              'Machine Condition': 'New',
              'Number Of Slices': '16 Slice',
              'Rotation Time': '0.5 sec',
              'Country of Origin': 'Made in Germany',
            },
          },
          {
            count: '3',
            version: 'v1.3',
            model: 'Siemens Scope 16 Slice CT Scanner',
            specification: {
              'Machine Condition': 'New',
              'Number Of Slices': '16 Slice',
              'Rotation Time': '0.75 sec',
              'Country of Origin': 'Made in Germany',
            },
          },
          {
            count: '3',
            version: 'v1.3',
            model: 'Siemens Go Now Comeback CT Scanner',
            specification: {
              'Machine Condition': 'New',
              'Number Of Slices': '16 Slice',
              'Rotation Time': '0.6 sec',
              'Country of Origin': 'Made in Germany',
            },
          },
        ],
      },
      {
        name: 'Toshiba',
        models: [
          {
            count: '3',
            version: 'v1.3',
            model: 'Toshiba-Activion 16 slice CT Scan Machine',
            specification: {
              'Machine Condition': 'New',
              'Usage/Application': 'CT scan machine',
              'Number Of Slices': '16 Slice',
              'Xray Tube Type': '3mhu',
            },
          },
          {
            count: '3',
            version: 'v1.3',
            model: 'Toshiba Alexion 16 Slice Ct Scanner Machine',
            specification: {
              'Machine Condition': 'New',
              'Usage/Application': 'CT scan machine',
              'Number Of Slices': '16 Slice',
              'Rotation Time': '0.75 sec',
            },
          },
          {
            count: '3',
            version: 'v1.3',
            model: 'Toshiba Alexion 4 Slice CT Scanner Machine',
            specification: {
              'Machine Condition': 'New',
              'Usage/Application': 'CT scan machine',
              'Number Of Slices': '4 Slice',
              'Rotation Time': '1 sec',
            },
          },
        ],
      },
      {
        name: 'GE',
        models: [
          {
            count: '3',
            version: 'v1.3',
            model: 'GE Bright Speed 16 Slice CT Scan Machine',
            specification: {
              'Number Of Slices': '16 Slice',
              'Rotation Time': '0.5 sec',
              'Scan Time': '1 min',
              'Xray Tube Type': '3.5mhu',
            },
          },
          {
            count: '2',
            version: 'v1.0',
            model: 'GE Light Speed CT Scan Machine',
            specification: {
              'Number Of Slices': '64 Slice',
              'Rotation Time': '0.5 sec',
              'Scan Time': '1 min',
              'Xray Tube Type': '3.0mhu',
            },
          },
        ],
      },
    ],
  },
  cathlab: {
    heading: 'Cathlab Machines',
    brands: [
      {
        name: 'Philips',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'Philips Cathlab FD10',
            specification: {
              'Machine Condition': 'New',
              Application: 'Cathlab',
              'X-ray Tube Type': 'High Frequency',
              'Country of Origin': 'Made in Netherlands',
            },
          },
          {
            model: 'Philips Cathlab FD20',
            specification: {
              'Machine Condition': 'New',
              Application: 'Cathlab',
              'X-ray Tube Type': 'High Frequency',
              'Country of Origin': 'Made in Netherlands',
            },
          },
          {
            model: 'Philips Cathlab FC',
            specification: {
              'Machine Condition': 'New',
              Application: 'Cathlab',
              'X-ray Tube Type': 'High Frequency',
              'Country of Origin': 'Made in Netherlands',
            },
          },
        ],
      },
      {
        name: 'GE',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'GE IGS 320',
            specification: {
              'Machine Condition': 'New',
              Application: 'Cathlab',
              'X-ray Tube Type': 'High Frequency',
              'Country of Origin': 'Made in USA',
            },
          },
        ],
      },
    ],
  },
  mri: {
    heading: 'MRI Machines',
    brands: [
      {
        name: 'Hitachi',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'Hitachi Airis 2 MRI',
            specification: {
              'Machine Condition': 'New',
              'Magnetic Field Strength': '0.3 Tesla',
              Application: 'MRI Imaging',
              'Country of Origin': 'Made in Japan',
            },
          },
          {
            model: 'Hitachi Airis Mate MRI',
            specification: {
              'Machine Condition': 'New',
              'Magnetic Field Strength': '0.3 Tesla',
              Application: 'MRI Imaging',
              'Country of Origin': 'Made in Japan',
            },
          },
        ],
      },
      {
        name: 'GE',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'GE 1.5 Tesla MRI',
            specification: {
              'Machine Condition': 'New',
              'Magnetic Field Strength': '1.5 Tesla',
              Application: 'MRI Imaging',
              'Country of Origin': 'Made in USA',
            },
          },
        ],
      },
    ],
  },
  mammography: {
    heading: 'Mammography Machines',
    brands: [
      {
        name: 'Allenger',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'Allenger Mammography 4000',
            specification: {
              'Machine Condition': 'New',
              Application: 'Mammography Imaging',
              'X-ray Tube': 'Molybdenum',
              'Detector Type': 'Flat Panel Detector',
              'Country of Origin': 'Made in India',
              'kV Range': '25kV to 40kV',
            },
          },
          {
            model: 'Allenger Mammography 5000',
            specification: {
              'Machine Condition': 'New',
              Application: 'Mammography Imaging',
              'X-ray Tube': 'Molybdenum',
              'Detector Type': 'Flat Panel Detector',
              'Country of Origin': 'Made in India',
              'kV Range': '25kV to 45kV',
            },
          },
        ],
      },
      {
        name: 'GE',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'GE Senographe Essential',
            specification: {
              'Machine Condition': 'New',
              Application: 'Mammography Imaging',
              'X-ray Tube': 'Tungsten',
              'Detector Type': 'Digital',
              'Country of Origin': 'Made in USA',
              'kV Range': '20kV to 40kV',
            },
          },
          {
            model: 'GE Senographe Pristina',
            specification: {
              'Machine Condition': 'New',
              Application: 'Mammography Imaging',
              'X-ray Tube': 'Tungsten',
              'Detector Type': 'Digital',
              'Country of Origin': 'Made in USA',
              'kV Range': '20kV to 45kV',
            },
          },
        ],
      },
      {
        name: 'Siemens',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'Siemens Mammomat Fusion',
            specification: {
              'Machine Condition': 'New',
              Application: 'Mammography Imaging',
              'X-ray Tube': 'Molybdenum',
              'Detector Type': 'Flat Panel Detector',
              'Country of Origin': 'Made in Germany',
              'kV Range': '25kV to 40kV',
            },
          },
          {
            model: 'Siemens Mammomat Revelation',
            specification: {
              'Machine Condition': 'New',
              Application: 'Mammography Imaging',
              'X-ray Tube': 'Molybdenum',
              'Detector Type': 'Flat Panel Detector',
              'Country of Origin': 'Made in Germany',
              'kV Range': '25kV to 45kV',
            },
          },
        ],
      },
    ],
  },
  ultrasound: {
    heading: 'Ultrasound Machines',
    brands: [
      {
        name: 'GE',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'GE Logiq P9',
            specification: {
              'Machine Condition': 'New',
              Application: 'Ultrasound Imaging',
              Technology: 'B-Mode, Color Doppler, 3D/4D',
              Display: '15-inch High-Resolution LCD',
              'Country of Origin': 'Made in USA',
              'Frequency Range': '2-13 MHz',
            },
          },
          {
            model: 'GE Voluson E10',
            specification: {
              'Machine Condition': 'New',
              Application: 'Obstetric & Gynecological Imaging',
              Technology: '3D/4D Imaging',
              Display: '21-inch LED Monitor',
              'Country of Origin': 'Made in USA',
              'Frequency Range': '1-12 MHz',
            },
          },
        ],
      },
      {
        name: 'Philips',
        count: '3',
        version: 'v1.3',
        models: [
          {
            model: 'Philips Affiniti 70',
            specification: {
              'Machine Condition': 'New',
              Application: 'Ultrasound Imaging',
              Technology: 'Elastography, Color Doppler',
              Display: '19-inch Full HD Display',
              'Country of Origin': 'Made in Netherlands',
              'Frequency Range': '1-12 MHz',
            },
          },
          {
            model: 'Philips EPIQ 7',
            specification: {
              'Machine Condition': 'New',
              Application: 'Cardiovascular & General Imaging',
              Technology: '3D/4D Imaging, Tissue Doppler',
              Display: '21-inch Full HD LED',
              'Country of Origin': 'Made in Netherlands',
              'Frequency Range': '1-18 MHz',
            },
          },
        ],
      },
    ],
  },
};

const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');

const aspectContent = document.getElementById('aspect-content');
document.querySelector('.single-heading').textContent =
  machineDetails[type].heading;

machineDetails[type].brands.forEach((brand, brandIndex) => {
  let brandHtml = `
    <div class="aspect-tab">
      <input id="item-${
        brandIndex + 18
      }" type="checkbox" class="aspect-input" name="aspect">
      <label for="item-${brandIndex + 18}" class="aspect-label"></label>
      <div class="aspect-content">
        <div class="aspect-info">
          <h3 class="aspect-name">${brand.name}</h3>
        </div>
        <div class="aspect-stat">
          <div class="all-opinions">
            <span class="all-opinions-count">${brand.count}</span>
            <span></span>
          </div>
        </div>
      </div>
    
      <!-- Parent div for all models under this brand -->
      <div class="aspect-tab-content">
  `;

  // Loop through each model for the current brand and add it as a new child inside aspect-tab-content
  brand.models.forEach((model, modelIndex) => {
    brandHtml += `
      <div class="mt-4">
        <div class="row">
          <div class="col-12">
            <h2 class="text-left">${model.model}</h2>
          </div>
        </div>
        <div class="row mt-3 d-flex" style="gap: 30px; background: var(--rr-common-white); border: 1px solid #E4E5E5; border-radius: 20px; padding: 20px; justify-content: center; margin: 20px;">
          <div class="col-12 col-md-6">
            <div class="card">
              <img src=${
                model?.image ||
                'https://5.imimg.com/data5/SELLER/Default/2023/7/325079259/EV/VA/RY/57551116/siemens-multimobil-2-5-mobile-x-ray-machine-500x500.jpg'
              } class="card-img-top img-fluid" alt="${brand.name} ${
      model.model
    }">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Product Details</h5>
                <table class="table">
                  <tbody>
                    <tr><td>Brand</td><td>${brand.name}</td></tr>
                    <tr><td>Model Name/Number</td><td>${model.model}</td></tr>
                    <tr><td>Machine Type</td><td>Portable (Mobile)</td></tr>
                    <tr><td>Operation Mode</td><td>Automatic</td></tr>
                    <tr><td>X-Ray Tube</td><td>1.5mm X 1.5mm</td></tr>
                    <tr><td>Output wave</td><td>${
                      model.specification['Output wave']
                    }</td></tr>
                    <tr><td>Tube Head Angulations</td><td>${
                      model.specification['Tube Head Angulations']
                    }</td></tr>
                    <tr><td>mA Range</td><td>${
                      model.specification['mA Range']
                    }</td></tr>
                    <tr><td>Exposure Technique</td><td>${
                      model.specification['Exposure Technique']
                    }</td></tr>
                    <tr><td>Output Power</td><td>${
                      model.specification['Output Power']
                    }</td></tr>
                    <tr><td>kV range</td><td>${
                      model.specification['kV range']
                    }</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Close the brand container and the parent div for models
  brandHtml += `</div></div>`;

  // Append the generated HTML to the aspect-content div
  aspectContent.innerHTML += brandHtml;
});
