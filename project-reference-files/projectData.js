// Complete Project data from Excel sheet (Row by Row)
const projectsData = {
    "10005": {
        // General Information
        jan: "JAN-10005",
        status: "Payment Pending",
        client: "NTPC",
        workName: "PCC Paving between Track Hopper I & II at Barh STPP",
        location: "Chennai, Tamil Nadu",
        tenderRef: "NTECL/C&M/NIT-143/CS-2726",
        tenderFee: "Exempted (MSME)",
        financialYear: "2017-18",
        eic: {
            previous: "Manpreet Kaur",
            current: {
                name: "Monika Kochhar",
                initials: "MK"
            }
        },
        
        // Stats Cards
        stats: {
            contractValue: "₹5.22",
            valueChange: "Original Value",
            progress: "95%",
            progressStatus: "↑ Near Completion",
            daysRemaining: "Overdue",
            deadline: "Since 15 Oct 2025",
            bankGuarantee: "₹2.60 L",
            bgStatus: "BG Submitted (SBI)",
            emdStatus: "EMD Exempted",
            emdNote: "ISB Form"
        },
        
        // Alert
        alert: {
            title: "Payment Pending - Action Required",
            message: "This project is awaiting final payment clearance. Bank Guarantee (₹2.60 L) from SBI expires on 15 Aug 2026. Please expedite payment process."
        },
        
        // Client Details
        clientDetails: {
            companyName: "NTPC Tamilnadu Energy Company Ltd",
            address: "Vallur Thermal Power Project, Vellivoyal Chavadi Post, Ponneri Taluk, Thiruvallur District Chennai",
            contactPrevious: {
                name: "Shri P.P. Jayachandran",
                designation: "Manager",
                mobile: "8826697153"
            },
            contactCurrent: {
                name: "Sh. Vidhya Bhushan Kumar",
                designation: "Deputy Manager",
                mobile: "9948044458",
                email: "VBkumar01@ntpc.co.in",
                emailCC: "parul@ntpc.co.in"
            }
        },
        
        // Commercial Details
        commercial: {
            originalValue: "₹5.22 Crores",
            updatedValue: "₹5.22 Crores",
            gstStatus: "GST Extra (18%)",
            valueIncrease: "No Change",
            bgStatus: "BG Submitted",
            bgValue: "₹2.60 Lakhs",
            bankName: "SBI",
            bgExpiry: "15 Aug 2026",
            bgExpiryClaimDate: "15 Jun 2026",
            loaNumber: "NTECL/C&M/NIT-143/CS-2726 / LOA-2749",
            loaDate: "11 Oct 2017 (Issued: 05 Dec 2025)"
        },
        
        // Schedule & Timeline
        schedule: {
            loaReceived: "05 Dec 2025",
            workStartPO: "11 Oct 2017",
            workStartActual: "25 Jul 2025",
            completionOriginal: "11 Jun 2018",
            completionLatest: "15 Oct 2025",
            completionExtended: "NIL",
            totalDuration: "~8 Years (with delays)",
            daysRemaining: "Overdue"
        },
        
        // Timeline
        timeline: [
            { date: "11 Oct 2017", title: "LOA Received", desc: "Letter of Award received and contract signed", status: "completed" },
            { date: "05 Apr 2022", title: "Subcontractor Appointed", desc: "Araan Constructions - 7% work order issued", status: "completed" },
            { date: "11 Oct 2017", title: "Work Started", desc: "Project mobilization began", status: "completed" },
            { date: "15 Oct 2025", title: "Project Overdue", desc: "Payment pending, project completion delayed", status: "pending" }
        ],
        
        // Tender & Compliance
        compliance: {
            msmeStatus: "Exempted as per MSME bidder",
            tenderFee: "Exempted",
            cmEmail: "manager.cst@railway.com",
            cmMobile: "91 9153217419",
            poIssuedPerson: "Mr. MOHAMMAD FAIJAN",
            workStartPO: "18 Jan 2025",
            workStartActual: "25 Jul 2025"
        },
        
        // Subcontractor Details
        subcontractor: {
            name: "Araan Constructions",
            proprietor: "Arun Kumar MS",
            mobile: "9445976751",
            email: "araanconstructions@yahoo.com",
            gstin: "33AMDPA5733F1ZM",
            woPercentage: "7%",
            woNumber: "10005/12220058",
            woDate: "05 Apr 2022",
            woLink: "https://drive.google.com/file/d/1Uoles7nM3GO1azbccZT0KSQQ_aLxRx4n/view?usp=sharing"
        },
        
        // Documents
        documents: {
            clientWO: "https://drive.google.com/file/d/1gTnQD5_vaiDYrrKIKyX1tac-3VSji1c_/view?usp=sharing",
            contractAgreement: "https://drive.google.com/file/d/1Nw5-gDoVvo37929E4uFaoLhYZ-GFaDf0/view?usp=sharing",
            subcontractorWO: "https://drive.google.com/file/d/1Uoles7nM3GO1azbccZT0KSQQ_aLxRx4n/view?usp=sharing",
            bankGuarantee: "Available - BG Submitted"
        },
        
        // Chart Data
        chartData: {
            expenditure: {
                completed: 95,
                inProgress: 3,
                pending: 2,
                completedValue: "₹4.96 Cr",
                inProgressValue: "₹0.16 Cr",
                pendingValue: "₹0.10 Cr"
            },
            schedule: {
                labels: ['Oct 2017', 'Jun 2018', 'Dec 2020', 'Jun 2022', 'Dec 2023', 'Oct 2025', 'Now'],
                planned: [10, 100, 100, 100, 100, 100, 100],
                actual: [10, 80, 85, 90, 92, 95, 95]
            }
        }
    },
    
    "10053": {
        // General Information
        jan: "JAN-10053",
        status: "Ongoing",
        client: "PGCIL",
        workName: "Construction of Community Centre at Thrissur",
        location: "Thrissur, Kerala",
        tenderRef: "RPT-HVDC/C&M/WC-135/NIT-016(E)/2021, RFX 5002001670",
        tenderFee: "₹2,655/- (Online)",
        financialYear: "2021-22",
        eic: {
            previous: "Manpreet Kaur",
            current: {
                name: "IRAM",
                initials: "IR"
            }
        },
        
        // Stats Cards
        stats: {
            contractValue: "₹3.40",
            valueChange: "↑ 10% from initial",
            progress: "75%",
            progressStatus: "↑ Near Completion",
            daysRemaining: "354",
            deadline: "Until 31 Dec 2026",
            bankGuarantee: "N/A",
            bgStatus: "CPG Not Submitted",
            emdStatus: "EMD Exempted",
            emdNote: "As per MSME"
        },
        
        // Alert
        alert: {
            title: "Time Extension Granted",
            message: "Project completion extended from 31 Oct 2025 to 31 Dec 2026. CPG/Bank Guarantee not submitted for this project."
        },
        
        // Client Details
        clientDetails: {
            companyName: "PGCIL (Power Grid Corporation of India Ltd)",
            address: "320KV, HVDC Terminal Station, KAU Campus, Vellanikara Post, Thrissur, Kerala",
            contactPrevious: {
                name: "Manoj Kumar",
                designation: "Deputy Manager",
                mobile: "9948044458"
            },
            contactCurrent: {
                name: "Shri P.P. Jayachandran",
                designation: "Deputy General Manager",
                mobile: "9074356272",
                email: "hvdc.thrissur@powergrid.co.in",
                emailCC: "supriya_tv@powergrid.in"
            }
        },
        
        // Commercial Details
        commercial: {
            originalValue: "₹3.09 Crores",
            updatedValue: "₹3.40 Crores",
            gstStatus: "GST Extra (18%)",
            valueIncrease: "₹0.31 Cr (10%)",
            bgStatus: "CPG Not Submitted",
            bgValue: "N/A",
            bankName: "HDFC (EMD Bank)",
            bgExpiry: "N/A",
            bgExpiryClaimDate: "N/A",
            loaNumber: "RPT/HVDC/C&M/WC-135/LOA-241",
            loaDate: "11 May 2021 / SAP PO: 6900010896"
        },
        
        // Schedule & Timeline
        schedule: {
            loaReceived: "11 May 2021",
            workStartPO: "21 Mar 2020",
            workStartActual: "09 Jul 2025",
            completionOriginal: "08 Dec 2021",
            completionLatest: "31 Oct 2025",
            completionExtended: "31 Dec 2026",
            totalDuration: "~5.5 Years (with extensions)",
            daysRemaining: "~354 Days (until 31 Dec 2026)"
        },
        
        // Timeline
        timeline: [
            { date: "11 May 2021", title: "LOA Received", desc: "LOA No. RPT/HVDC/C&M/WC-135/LOA-241, SAP PO: 6900010896", status: "completed" },
            { date: "14 May 2022", title: "Subcontractor Appointed", desc: "M/s COCHIN ENGINEERING - 11.5% work order issued", status: "completed" },
            { date: "21 Mar 2020", title: "Work Started", desc: "Project mobilization and construction began", status: "completed" },
            { date: "31 Dec 2026", title: "Project Completion (Extended)", desc: "Final handover and commissioning (Original: 31 Oct 2025)", status: "pending" }
        ],
        
        // Tender & Compliance
        compliance: {
            msmeStatus: "Exempted as per MSME bidder",
            tenderFee: "₹2,655/- (Online Payment)",
            cmEmail: "sanvithareddy2017@gmail.com",
            cmMobile: "89430 31000",
            poIssuedPerson: "Mr. FAKHRUL HASAN",
            workStartPO: "18 Jun 2025",
            workStartActual: "09 Jul 2025"
        },
        
        // Subcontractor Details
        subcontractor: {
            name: "M/s COCHIN ENGINEERING PROJECT INDIA PRIVATE LIMITED",
            proprietor: "Shri Umesh Manickan / SALEENA UMESH",
            mobile: "8129797634",
            email: "rishikeshr349@gmail.com",
            gstin: "32DRQPR8682K1ZS",
            woPercentage: "11.50%",
            woNumber: "12220060",
            woDate: "14 May 2022",
            woLink: "https://drive.google.com/file/d/1ct-6eDqCZdIy_MK4Lq-_lLIepRnndS6S/view?usp=sharing"
        },
        
        // Documents
        documents: {
            clientWO: "https://drive.google.com/drive/folders/18OWnUOZ23EwaI3ikyCOf4Xst4pk7jirT?usp=sharing",
            contractAgreement: "https://drive.google.com/file/d/1Ep4yaLlJps1WK_MjZ6JBLKvG8I1cUNBn/view?usp=sharing",
            subcontractorWO: "https://drive.google.com/file/d/1ct-6eDqCZdIy_MK4Lq-_lLIepRnndS6S/view?usp=sharing",
            bankGuarantee: "N/A - CPG Not Submitted"
        },
        
        // Chart Data
        chartData: {
            expenditure: {
                completed: 75,
                inProgress: 15,
                pending: 10,
                completedValue: "₹2.55 Cr",
                inProgressValue: "₹0.51 Cr",
                pendingValue: "₹0.34 Cr"
            },
            schedule: {
                labels: ['May 2021', 'Q3 2021', 'Q1 2022', 'Q3 2023', 'Q1 2025', 'Jul 2025', 'Dec 2026'],
                planned: [5, 20, 40, 60, 70, 85, 100],
                actual: [5, 15, 30, 45, 60, 75, null]
            }
        }
    },
    
    "20022": {
        // General Information
        jan: "JAN-20022",
        status: "Completed",
        client: "PGCIL",
        workName: "Construction of Hi-tech Class-Cum Conference Room at Misa EDC",
        location: "Misa, Assam (Village: Veluguri, Pin-782427)",
        tenderRef: "NESH/CSM/SRM/OT/5000-03, Rfx. 5002001796",
        tenderFee: "₹3,500/- (Online)",
        financialYear: "2021-22",
        eic: {
            previous: "Sheeba",
            current: {
                name: "IRAM",
                initials: "IR"
            }
        },
        
        // Stats Cards
        stats: {
            contractValue: "₹1.28",
            valueChange: "↑ Updated from ₹1.17 Cr",
            progress: "100%",
            progressStatus: "✓ Completed",
            daysRemaining: "0",
            deadline: "Project Completed",
            bankGuarantee: "N/A",
            bgStatus: "CPG Not Submitted",
            emdStatus: "EMD Exempted",
            emdNote: "NEFT/RTGS Form"
        },
        
        // Alert
        alert: {
            title: "Project Successfully Completed",
            message: "This project has been successfully completed. Expected completion was 31 Jan 2026. Final handover and documentation completed."
        },
        
        // Client Details
        clientDetails: {
            companyName: "Power Grid Corporation of India Limited",
            address: "400/220 kV Misa Sub-station, Village: Veluguri, Pin-782427, Dist: Hojai, Assam",
            contactPrevious: {
                name: "Sh. Praveen Kumar T V S",
                designation: "DGM",
                mobile: "9436175830"
            },
            contactCurrent: {
                name: "Navin Kumar Mahato",
                designation: "Ch. Manager (I/C) / Chief Manager",
                mobile: "9099995703",
                email: "mrinmoymajumder97@powergrid.in",
                emailCC: "sharmaabhishek@powergrid.in"
            }
        },
        
        // Commercial Details
        commercial: {
            originalValue: "₹1.17 Crores",
            updatedValue: "₹1.28 Crores",
            gstStatus: "GST Extra (18%)",
            valueIncrease: "₹0.11 Cr (9.4%)",
            bgStatus: "CPG Not Submitted",
            bgValue: "N/A",
            bankName: "HDFC (EMD Bank)",
            bgExpiry: "N/A",
            bgExpiryClaimDate: "N/A",
            loaNumber: "NESH/CSM/FY:2021-22/5000-23/NOA/149",
            loaDate: "23 Dec 2021 / SAP PO: 6800009930"
        },
        
        // Schedule & Timeline
        schedule: {
            loaReceived: "23 Dec 2021",
            workStartPO: "22 Mar 2022",
            workStartActual: "08 Jul 2025",
            completionOriginal: "23 Jun 2022",
            completionLatest: "31 Jan 2026",
            completionExtended: "NIL",
            totalDuration: "~4 Years (Completed)",
            daysRemaining: "Project Completed"
        },
        
        // Timeline
        timeline: [
            { date: "23 Dec 2021", title: "LOA Received", desc: "NOA Ref. No. NESH/CSM/FY:2021-22/5000-23/NOA/149, SAP PO: 6800009930", status: "completed" },
            { date: "15 Nov 2024", title: "Subcontractor Appointed", desc: "M/S AR INFRATECH - 10% work order issued", status: "completed" },
            { date: "22 Mar 2022", title: "Work Started", desc: "Project mobilization and site setup completed", status: "completed" },
            { date: "31 Jan 2026", title: "Project Completed", desc: "Final handover and commissioning successfully completed", status: "completed" }
        ],
        
        // Tender & Compliance
        compliance: {
            msmeStatus: "Exempted as per MSME bidder",
            tenderFee: "₹3,500/- (Online Payment)",
            cmEmail: "gsharma2060@yahoo.com",
            cmMobile: "8435422224",
            poIssuedPerson: "Ms. Sangana Praveena",
            workStartPO: "08 Jul 2025",
            workStartActual: "08 Jul 2025"
        },
        
        // Subcontractor Details
        subcontractor: {
            name: "M/S AR INFRATECH",
            proprietor: "ANJU SINGH",
            mobile: "8130529991",
            email: "raj1977.singh@gmail.com",
            gstin: "09OBZPS8680E1Z8",
            woPercentage: "10%",
            woNumber: "02-20022-224240",
            woDate: "15 Nov 2024",
            woLink: "https://drive.google.com/file/d/1tFl-Pu37A3BNNobG7MDaHjP0KFJhxvL_/view?usp=sharing"
        },
        
        // Documents
        documents: {
            clientWO: "https://drive.google.com/drive/folders/1yEmUdKIvJBzoASMapkD1sS3NkVKr4Adr?usp=sharing",
            contractAgreement: "https://drive.google.com/file/d/1f0_0rCLnm4Xig2mOzMpgmTuARBOyBm08/view?usp=sharing",
            subcontractorWO: "https://drive.google.com/file/d/1tFl-Pu37A3BNNobG7MDaHjP0KFJhxvL_/view?usp=sharing",
            bankGuarantee: "N/A - CPG Not Submitted"
        },
        
        // Chart Data
        chartData: {
            expenditure: {
                completed: 100,
                inProgress: 0,
                pending: 0,
                completedValue: "₹1.28 Cr",
                inProgressValue: "₹0.00 Cr",
                pendingValue: "₹0.00 Cr"
            },
            schedule: {
                labels: ['Dec 2021', 'Mar 2022', 'Jun 2022', 'Dec 2023', 'Jun 2024', 'Dec 2024', 'Jan 2026'],
                planned: [10, 30, 100, 100, 100, 100, 100],
                actual: [10, 30, 60, 75, 85, 95, 100]
            }
        }
    }
};
