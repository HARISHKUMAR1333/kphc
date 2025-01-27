const machineDetails = {
  'x-ray': {
    heading: 'X Ray Machine',
    brands: [
      {
        name: 'Siemens',
        count: '2',
        version: 'v1.2',
        model: 'Multimobil 2.5',
        specification: {
          'Output wave': 'High Frequency, Maximum Ripple 5kV',
          'Tube Head Angulations': 'Along X-Ray Tube Axis: +180 / -30',
          'mA Range': '13mA to 63mA',
          'Exposure Technique': 'Two Point Technique',
          'Output Power': '2.5kW as per IS:7620',
          'kV range': '40kV to 100kV',
        },
      },
      {
        name: 'Philips',
        count: '3',
        version: 'v1.3',
        model: 'Mobile 1000',
        specification: {
          'Output wave': 'Low Frequency, Maximum Ripple 3kV',
          'Tube Head Angulations': 'Along X-Ray Tube Axis: +150 / -20',
          'mA Range': '10mA to 55mA',
          'Exposure Technique': 'Single Point Technique',
          'Output Power': '2.0kW as per IS:7620',
          'kV range': '30kV to 80kV',
        },
      },
    ],
  },
};

const aspectContent = document.getElementById('aspect-content');

machineDetails['x-ray'].brands.forEach((brand, index) => {
  const brandHtml = `
      <div class="aspect-tab">
        <input id="item-${
          index + 18
        }" type="checkbox" class="aspect-input" name="aspect">
        <label for="item-${index + 18}" class="aspect-label"></label>
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
        <div class="aspect-tab-content">
          <div class="mt-4">
            <div class="row">
              <div class="col-12">
                <h2 class="text-left">${brand.name} ${brand.model}</h2>
              </div>
            </div>
            <div class="row mt-3 d-flex" style="gap: 30px; background: var(--rr-common-white); border: 1px solid #E4E5E5; border-radius: 20px; padding: 20px; justify-content: center; margin: 20px;">
              <div class="col-12 col-md-6">
                <div class="card">
                  <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/325079259/EV/VA/RY/57551116/siemens-multimobil-2-5-mobile-x-ray-machine-500x500.jpg" class="card-img-top img-fluid" alt="${
                    brand.name
                  } ${brand.model}">
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Product Details</h5>
                    <table class="table">
                      <tbody>
                        <tr><td>Brand</td><td>${brand.name}</td></tr>
                        <tr><td>Model Name/Number</td><td>${
                          brand.model
                        }</td></tr>
                        <tr><td>Machine Type</td><td>Portable (Mobile)</td></tr>
                        <tr><td>Operation Mode</td><td>Automatic</td></tr>
                        <tr><td>X-Ray Tube</td><td>1.5mm X 1.5mm</td></tr>
                        <tr><td>Output wave</td><td>${
                          brand.specification['Output wave']
                        }</td></tr>
                        <tr><td>Tube Head Angulations</td><td>${
                          brand.specification['Tube Head Angulations']
                        }</td></tr>
                        <tr><td>mA Range</td><td>${
                          brand.specification['mA Range']
                        }</td></tr>
                        <tr><td>Exposure Technique</td><td>${
                          brand.specification['Exposure Technique']
                        }</td></tr>
                        <tr><td>Output Power</td><td>${
                          brand.specification['Output Power']
                        }</td></tr>
                        <tr><td>kV range</td><td>${
                          brand.specification['kV range']
                        }</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  // Append the generated HTML to the aspect-content div
  aspectContent.innerHTML += brandHtml;
});
