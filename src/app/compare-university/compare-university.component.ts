import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compare-university',
  imports: [CommonModule, FormsModule],
  templateUrl: './compare-university.component.html',
  styleUrl: './compare-university.component.scss'
})
export class CompareUniversityComponent implements OnInit {
  // Sample data for demonstration
  sampleUniversities = [
    {
      id: 1,
      name: 'Indian Institute of Technology Delhi',
      location: 'Delhi, India',
      type: 'Public Technical University',
      established: '1961',
      accredited: 'Yes',
      rating: 4.8,
      nirfRanking: '1',
      qsRanking: '185',
      placementRate: 92,
      tuitionFees: 80000,
      hostelFees: 60000,
      totalFees: 140000,
      scholarship: 'Available',
      highestPackage: 120,
      averagePackage: 24,
      campusSize: 325,
      studentFacultyRatio: '9:1',
      internationalExposure: 'Yes',
      hostelAvailable: 'Yes',
      courses: {
        engineering: ['Computer Science', 'Mechanical', 'Electrical'],
        management: ['MBA', 'Executive MBA'],
        arts: ['Economics', 'Design']
      },
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs']
    },
    {
      id: 2,
      name: 'University of Mumbai',
      location: 'Mumbai, India',
      type: 'Public State University',
      established: '1857',
      accredited: 'Yes',
      rating: 4.2,
      nirfRanking: '45',
      qsRanking: '801-1000',
      placementRate: 78,
      tuitionFees: 50000,
      hostelFees: 40000,
      totalFees: 90000,
      scholarship: 'Limited',
      highestPackage: 65,
      averagePackage: 12,
      campusSize: 243,
      studentFacultyRatio: '15:1',
      internationalExposure: 'No',
      hostelAvailable: 'Yes',
      courses: {
        engineering: ['IT', 'Civil', 'Chemical'],
        management: ['BMS', 'MMS'],
        arts: ['Arts', 'Commerce', 'Science']
      },
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'HDFC Bank']
    },
    {
      id: 3,
      name: 'Christ University',
      location: 'Bangalore, India',
      type: 'Private Deemed University',
      established: '1969',
      accredited: 'Yes',
      rating: 4.5,
      nirfRanking: '67',
      qsRanking: 'NA',
      placementRate: 85,
      tuitionFees: 120000,
      hostelFees: 80000,
      totalFees: 200000,
      scholarship: 'Available',
      highestPackage: 42,
      averagePackage: 8,
      campusSize: 85,
      studentFacultyRatio: '12:1',
      internationalExposure: 'Yes',
      hostelAvailable: 'Yes',
      courses: {
        engineering: ['Computer Science', 'Electronics'],
        management: ['BBA', 'MBA'],
        arts: ['Psychology', 'Journalism', 'Law']
      },
      topRecruiters: ['Deloitte', 'KPMG', 'EY', 'Accenture']
    },
    {
      id: 4,
      name: 'Delhi University',
      location: 'Delhi, India',
      type: 'Public Central University',
      established: '1922',
      accredited: 'Yes',
      rating: 4.6,
      nirfRanking: '13',
      qsRanking: '521-530',
      placementRate: 88,
      tuitionFees: 15000,
      hostelFees: 20000,
      totalFees: 35000,
      scholarship: 'Available',
      highestPackage: 85,
      averagePackage: 15,
      campusSize: 280,
      studentFacultyRatio: '20:1',
      internationalExposure: 'Yes',
      hostelAvailable: 'Limited',
      courses: {
        engineering: ['None'],
        management: ['BMS', 'MBA'],
        arts: ['Arts', 'Commerce', 'Science', 'Law']
      },
      topRecruiters: ['McKinsey', 'BCG', 'Bain', 'RBI']
    },
    {
      id: 5,
      name: 'Manipal Academy of Higher Education',
      location: 'Manipal, Karnataka',
      type: 'Private Deemed University',
      established: '1953',
      accredited: 'Yes',
      rating: 4.4,
      nirfRanking: '51',
      qsRanking: '751-800',
      placementRate: 90,
      tuitionFees: 250000,
      hostelFees: 120000,
      totalFees: 370000,
      scholarship: 'Available',
      highestPackage: 95,
      averagePackage: 18,
      campusSize: 313,
      studentFacultyRatio: '10:1',
      internationalExposure: 'Yes',
      hostelAvailable: 'Yes',
      courses: {
        engineering: ['All Branches'],
        management: ['MBA', 'BBA'],
        arts: ['Medicine', 'Pharmacy', 'Nursing']
      },
      topRecruiters: ['Siemens', 'Philips', 'GE', 'Bayer']
    }
  ];

  // Component state
  selectedUniversities: any[] = [null, null, null];
  searchResults1: any[] = [];
  searchResults2: any[] = [];
  searchResults3: any[] = [];
  searchQuery1: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';
  showComparison: boolean = false;
  topUniversityIndex: number = -1;

  // Comparison sections for the criteria column
  comparisonSections = [
    {
      title: 'Basic Information',
      items: ['Location', 'University Type', 'Established Year', 'Accreditation']
    },
    {
      title: 'Rankings & Ratings',
      items: ['Overall Rating', 'NIRF Ranking', 'QS Ranking', 'Placement Rate']
    },
    {
      title: 'Fee Structure',
      items: ['Tuition Fees', 'Hostel Fees', 'Total Annual Cost', 'Scholarship']
    },
    {
      title: 'Popular Courses',
      items: ['Engineering', 'Management', 'Arts & Sciences']
    },
    {
      title: 'Placement Highlights',
      items: ['Highest Package', 'Average Package', 'Top Recruiters']
    },
    {
      title: 'Key Features',
      items: ['Campus Size', 'Student-Faculty Ratio', 'International Exposure', 'Hostel Availability']
    }
  ];

  // Keep existing sampleUniversities array...

  ngOnInit() {
    // Initialize with sample data for demo
    setTimeout(() => {
      this.selectUniversity(this.sampleUniversities[0], 0);
      this.selectUniversity(this.sampleUniversities[1], 1);
    }, 500);
  }

  get selectedCount(): number {
    return this.selectedUniversities.filter(uni => uni !== null).length;
  }

  // Add this new method for star display
  getStarArray(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push('★');
    if (halfStar) stars.push('½');
    for (let i = 0; i < emptyStars; i++) stars.push('☆');

    return stars;
  }

  searchUniversities(searchBox: number) {
    const query = searchBox === 1 ? this.searchQuery1 :
      searchBox === 2 ? this.searchQuery2 :
        this.searchQuery3;

    if (!query || query.length < 2) {
      if (searchBox === 1) this.searchResults1 = [];
      else if (searchBox === 2) this.searchResults2 = [];
      else this.searchResults3 = [];
      return;
    }

    const results = this.sampleUniversities.filter(uni =>
      uni.name.toLowerCase().includes(query.toLowerCase()) ||
      uni.location.toLowerCase().includes(query.toLowerCase())
    );

    if (searchBox === 1) this.searchResults1 = results;
    else if (searchBox === 2) this.searchResults2 = results;
    else this.searchResults3 = results;
  }

  selectUniversity(university: any, index: number) {
    this.selectedUniversities[index] = { ...university };

    // Clear search results
    if (index === 0) {
      this.searchResults1 = [];
      this.searchQuery1 = '';
    } else if (index === 1) {
      this.searchResults2 = [];
      this.searchQuery2 = '';
    } else {
      this.searchResults3 = [];
      this.searchQuery3 = '';
    }

    // Auto-compare if at least 2 universities are selected
    if (this.selectedCount >= 2) {
      setTimeout(() => this.compareUniversities(), 100);
    }
  }

  removeUniversity(index: number) {
    this.selectedUniversities[index] = null;
    this.showComparison = this.selectedCount >= 2;
  }

  // addUniversity() {
  //   // Find first empty slot
  //   const emptyIndex = this.selectedUniversities.findIndex(uni => uni === null);
  //   if (emptyIndex !== -1) {
  //     // Focus on that search box (implementation depends on your needs)
  //     console.log('Focus on search box', emptyIndex + 1);
  //   }
  // }

  clearAll() {
    this.selectedUniversities = [null, null, null];
    this.showComparison = false;
    this.topUniversityIndex = -1;
  }

  compareUniversities() {
    if (this.selectedCount < 2) {
      alert('Please select at least 2 universities to compare');
      return;
    }

    this.showComparison = true;

    // Calculate top university based on rating and placement rate
    let topScore = -1;
    this.selectedUniversities.forEach((uni, index) => {
      if (uni) {
        const score = (uni.rating * 20) + uni.placementRate;
        if (score > topScore) {
          topScore = score;
          this.topUniversityIndex = index;
        }
      }
    });
  }

  getStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }

  downloadComparison() {
    alert('Comparison report download would start here');
    // Implement actual download functionality
  }

  shareComparison() {
    alert('Share functionality would be implemented here');
    // Implement actual share functionality
  }
}