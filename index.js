window.addEventListener('DOMContentLoaded', () => {
  const packages = []

  document.getElementById('package_form').addEventListener('submit', function (e) {
    e.preventDefault()

    const recipientName = document.getElementById('recipient_name').value.trim()
    const packageId = document.getElementById('package_id').value.trim()
    const deliveryAddress = document.getElementById('delivery_address').value.trim()
    const weight = document.getElementById('weight').value.trim()

    if (!recipientName || !isNaN(recipientName)) {
      showError('recipient_name_error')
      return
    }
    if (!packageId || isNaN(packageId)) {
      showError('package_id_error')
      return
    }
    if (!deliveryAddress || !isNaN(deliveryAddress)) {
      showError('delivery_address_erro')
      return
    }
    if (!weight || isNaN(weight)) {
      showError('weight_erro')
      return
    }

    const packageData = {
      recipientName,
      packageId: parseInt(packageId, 10),
      deliveryAddress,
      weight: parseInt(weight, 10),
      trackingCode: generateTrackingCode(parseInt(packageId, 10), parseInt(weight, 10)),
    }

    packages.push(packageData)

    packages.sort((a, b) => a.weight - b.weight)

    displayPackages()
    clearErrors()

    this.reset()
  })

  function generateTrackingCode(packageId, weight) {
    return ((packageId << 4) | weight).toString(2)
  }

  function displayPackages() {
    const packageTableBody = document.getElementById('package_table_body')
    packageTableBody.innerHTML = ''
    packages.forEach((pkg) => {
      const row = document.createElement('tr')
      row.innerHTML = `
            <td class="border px-4 py-2">${pkg.recipientName}</td>
            <td class="border px-4 py-2">${pkg.packageId}</td>
            <td class="border px-4 py-2">${pkg.deliveryAddress}</td>
            <td class="border px-4 py-2">${pkg.weight}</td>
            <td class="border px-4 py-2">${pkg.trackingCode}</td>
            `
      packageTableBody.appendChild(row)
    })

    document.getElementById('package_table').classList.remove('hidden')
  }

  // Function to show error messages
  function showError(elementId) {
    const errorElement = document.getElementById(elementId)
    errorElement.classList.remove('hidden')
  }

  function clearErrors() {
    const errorBlock = document.querySelectorAll('span.block')
    errorBlock.forEach((errorElement) => {
      errorElement.classList.add('hidden')
    })
  }
})
