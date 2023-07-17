
const FilterMenuItems = [
    {
        title: 'Invoice',
        items: [
            { label: 'Total due amount', title: 'Invoice' },
            { label: 'Follow up status', title: 'Invoice' },
            { label: 'Issued date range', title: 'Invoice' },
        ],
    },
    {
        title: 'Customer',
        items: [
            { label: 'State', title: 'Customer' },
            { label: 'Country', title: 'Customer' },
        ],
    },
];

const ChipData = {
    "Invoice Status": [{ label: "Payment Pending", value: "Payment Pending" },
    { label: "In Dispute", value: "In Dispute" },
    { label: "Partially Paid", value: "Partially Paid" },
    { label: "Fully Paid", value: "Fully Paid" }],
    "Issued date range": [{ label: "This Week", value: "This Week" },
    { label: "Last 7 Days", value: "Last 7 Days" },
    { label: "Last 30 Days", value: "Last 30 Days" },
    { label: "More than 30 Days", value: "More than 30 Days" },
    { label: "Select Custom Range", value: "Select Custom Range" }],
    "State": [{ label: "Tamilnadu", value: "Tamilnadu" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Maharastra", value: "Maharastra" },
    { label: "Kerala", value: "Kerala" }]
}
let apiMapping = {
    "Invoice Status": "status",
    "Issued date range": "Issued_date"
}

export { FilterMenuItems, ChipData, apiMapping }