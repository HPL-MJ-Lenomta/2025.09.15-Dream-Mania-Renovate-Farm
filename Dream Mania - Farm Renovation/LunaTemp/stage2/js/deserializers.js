var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3650 = root || request.c( 'UnityEngine.JointSpring' )
  var i3651 = data
  i3650.spring = i3651[0]
  i3650.damper = i3651[1]
  i3650.targetPosition = i3651[2]
  return i3650
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3652 = root || request.c( 'UnityEngine.JointMotor' )
  var i3653 = data
  i3652.m_TargetVelocity = i3653[0]
  i3652.m_Force = i3653[1]
  i3652.m_FreeSpin = i3653[2]
  return i3652
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.JointLimits' )
  var i3655 = data
  i3654.m_Min = i3655[0]
  i3654.m_Max = i3655[1]
  i3654.m_Bounciness = i3655[2]
  i3654.m_BounceMinVelocity = i3655[3]
  i3654.m_ContactDistance = i3655[4]
  i3654.minBounce = i3655[5]
  i3654.maxBounce = i3655[6]
  return i3654
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.JointDrive' )
  var i3657 = data
  i3656.m_PositionSpring = i3657[0]
  i3656.m_PositionDamper = i3657[1]
  i3656.m_MaximumForce = i3657[2]
  i3656.m_UseAcceleration = i3657[3]
  return i3656
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3659 = data
  i3658.m_Spring = i3659[0]
  i3658.m_Damper = i3659[1]
  return i3658
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3661 = data
  i3660.m_Limit = i3661[0]
  i3660.m_Bounciness = i3661[1]
  i3660.m_ContactDistance = i3661[2]
  return i3660
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3663 = data
  i3662.m_ExtremumSlip = i3663[0]
  i3662.m_ExtremumValue = i3663[1]
  i3662.m_AsymptoteSlip = i3663[2]
  i3662.m_AsymptoteValue = i3663[3]
  i3662.m_Stiffness = i3663[4]
  return i3662
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3665 = data
  i3664.m_LowerAngle = i3665[0]
  i3664.m_UpperAngle = i3665[1]
  return i3664
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3666 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3667 = data
  i3666.m_MotorSpeed = i3667[0]
  i3666.m_MaximumMotorTorque = i3667[1]
  return i3666
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3669 = data
  i3668.m_DampingRatio = i3669[0]
  i3668.m_Frequency = i3669[1]
  i3668.m_Angle = i3669[2]
  return i3668
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3671 = data
  i3670.m_LowerTranslation = i3671[0]
  i3670.m_UpperTranslation = i3671[1]
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3673 = data
  i3672.name = i3673[0]
  i3672.width = i3673[1]
  i3672.height = i3673[2]
  i3672.mipmapCount = i3673[3]
  i3672.anisoLevel = i3673[4]
  i3672.filterMode = i3673[5]
  i3672.hdr = !!i3673[6]
  i3672.format = i3673[7]
  i3672.wrapMode = i3673[8]
  i3672.alphaIsTransparency = !!i3673[9]
  i3672.alphaSource = i3673[10]
  i3672.graphicsFormat = i3673[11]
  i3672.sRGBTexture = !!i3673[12]
  i3672.desiredColorSpace = i3673[13]
  i3672.wrapU = i3673[14]
  i3672.wrapV = i3673[15]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3675 = data
  i3674.pivot = new pc.Vec2( i3675[0], i3675[1] )
  i3674.anchorMin = new pc.Vec2( i3675[2], i3675[3] )
  i3674.anchorMax = new pc.Vec2( i3675[4], i3675[5] )
  i3674.sizeDelta = new pc.Vec2( i3675[6], i3675[7] )
  i3674.anchoredPosition3D = new pc.Vec3( i3675[8], i3675[9], i3675[10] )
  i3674.rotation = new pc.Quat(i3675[11], i3675[12], i3675[13], i3675[14])
  i3674.scale = new pc.Vec3( i3675[15], i3675[16], i3675[17] )
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3677 = data
  i3676.cullTransparentMesh = !!i3677[0]
  return i3676
}

Deserializers["Item"] = function (request, data, root) {
  var i3678 = root || request.c( 'Item' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'itemImage')
  request.r(i3679[2], i3679[3], 0, i3678, 'collectItemImage')
  request.r(i3679[4], i3679[5], 0, i3678, 'itemCountText')
  i3678.ItemCount = i3679[6]
  request.r(i3679[7], i3679[8], 0, i3678, 'completeSprite')
  request.r(i3679[9], i3679[10], 0, i3678, 'data')
  request.r(i3679[11], i3679[12], 0, i3678, 'UIMovement')
  request.r(i3679[13], i3679[14], 0, i3678, 'FurnitureImage')
  i3678.portraitLocation = new pc.Vec2( i3679[15], i3679[16] )
  i3678.landscapeLocation = new pc.Vec2( i3679[17], i3679[18] )
  return i3678
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3680 = root || request.c( 'UnityEngine.UI.Image' )
  var i3681 = data
  request.r(i3681[0], i3681[1], 0, i3680, 'm_Sprite')
  i3680.m_Type = i3681[2]
  i3680.m_PreserveAspect = !!i3681[3]
  i3680.m_FillCenter = !!i3681[4]
  i3680.m_FillMethod = i3681[5]
  i3680.m_FillAmount = i3681[6]
  i3680.m_FillClockwise = !!i3681[7]
  i3680.m_FillOrigin = i3681[8]
  i3680.m_UseSpriteMesh = !!i3681[9]
  i3680.m_PixelsPerUnitMultiplier = i3681[10]
  request.r(i3681[11], i3681[12], 0, i3680, 'm_Material')
  i3680.m_Maskable = !!i3681[13]
  i3680.m_Color = new pc.Color(i3681[14], i3681[15], i3681[16], i3681[17])
  i3680.m_RaycastTarget = !!i3681[18]
  i3680.m_RaycastPadding = new pc.Vec4( i3681[19], i3681[20], i3681[21], i3681[22] )
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3683 = data
  i3682.name = i3683[0]
  i3682.tagId = i3683[1]
  i3682.enabled = !!i3683[2]
  i3682.isStatic = !!i3683[3]
  i3682.layer = i3683[4]
  return i3682
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3684 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3685 = data
  i3684.m_hasFontAssetChanged = !!i3685[0]
  request.r(i3685[1], i3685[2], 0, i3684, 'm_baseMaterial')
  i3684.m_maskOffset = new pc.Vec4( i3685[3], i3685[4], i3685[5], i3685[6] )
  i3684.m_text = i3685[7]
  i3684.m_isRightToLeft = !!i3685[8]
  request.r(i3685[9], i3685[10], 0, i3684, 'm_fontAsset')
  request.r(i3685[11], i3685[12], 0, i3684, 'm_sharedMaterial')
  var i3687 = i3685[13]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 2) {
  request.r(i3687[i + 0], i3687[i + 1], 2, i3686, '')
  }
  i3684.m_fontSharedMaterials = i3686
  request.r(i3685[14], i3685[15], 0, i3684, 'm_fontMaterial')
  var i3689 = i3685[16]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 2) {
  request.r(i3689[i + 0], i3689[i + 1], 2, i3688, '')
  }
  i3684.m_fontMaterials = i3688
  i3684.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3685[17], i3685[18], i3685[19], i3685[20])
  i3684.m_fontColor = new pc.Color(i3685[21], i3685[22], i3685[23], i3685[24])
  i3684.m_enableVertexGradient = !!i3685[25]
  i3684.m_colorMode = i3685[26]
  i3684.m_fontColorGradient = request.d('TMPro.VertexGradient', i3685[27], i3684.m_fontColorGradient)
  request.r(i3685[28], i3685[29], 0, i3684, 'm_fontColorGradientPreset')
  request.r(i3685[30], i3685[31], 0, i3684, 'm_spriteAsset')
  i3684.m_tintAllSprites = !!i3685[32]
  request.r(i3685[33], i3685[34], 0, i3684, 'm_StyleSheet')
  i3684.m_TextStyleHashCode = i3685[35]
  i3684.m_overrideHtmlColors = !!i3685[36]
  i3684.m_faceColor = UnityEngine.Color32.ConstructColor(i3685[37], i3685[38], i3685[39], i3685[40])
  i3684.m_fontSize = i3685[41]
  i3684.m_fontSizeBase = i3685[42]
  i3684.m_fontWeight = i3685[43]
  i3684.m_enableAutoSizing = !!i3685[44]
  i3684.m_fontSizeMin = i3685[45]
  i3684.m_fontSizeMax = i3685[46]
  i3684.m_fontStyle = i3685[47]
  i3684.m_HorizontalAlignment = i3685[48]
  i3684.m_VerticalAlignment = i3685[49]
  i3684.m_textAlignment = i3685[50]
  i3684.m_characterSpacing = i3685[51]
  i3684.m_wordSpacing = i3685[52]
  i3684.m_lineSpacing = i3685[53]
  i3684.m_lineSpacingMax = i3685[54]
  i3684.m_paragraphSpacing = i3685[55]
  i3684.m_charWidthMaxAdj = i3685[56]
  i3684.m_enableWordWrapping = !!i3685[57]
  i3684.m_wordWrappingRatios = i3685[58]
  i3684.m_overflowMode = i3685[59]
  request.r(i3685[60], i3685[61], 0, i3684, 'm_linkedTextComponent')
  request.r(i3685[62], i3685[63], 0, i3684, 'parentLinkedComponent')
  i3684.m_enableKerning = !!i3685[64]
  i3684.m_enableExtraPadding = !!i3685[65]
  i3684.checkPaddingRequired = !!i3685[66]
  i3684.m_isRichText = !!i3685[67]
  i3684.m_parseCtrlCharacters = !!i3685[68]
  i3684.m_isOrthographic = !!i3685[69]
  i3684.m_isCullingEnabled = !!i3685[70]
  i3684.m_horizontalMapping = i3685[71]
  i3684.m_verticalMapping = i3685[72]
  i3684.m_uvLineOffset = i3685[73]
  i3684.m_geometrySortingOrder = i3685[74]
  i3684.m_IsTextObjectScaleStatic = !!i3685[75]
  i3684.m_VertexBufferAutoSizeReduction = !!i3685[76]
  i3684.m_useMaxVisibleDescender = !!i3685[77]
  i3684.m_pageToDisplay = i3685[78]
  i3684.m_margin = new pc.Vec4( i3685[79], i3685[80], i3685[81], i3685[82] )
  i3684.m_isUsingLegacyAnimationComponent = !!i3685[83]
  i3684.m_isVolumetricText = !!i3685[84]
  request.r(i3685[85], i3685[86], 0, i3684, 'm_Material')
  i3684.m_Maskable = !!i3685[87]
  i3684.m_Color = new pc.Color(i3685[88], i3685[89], i3685[90], i3685[91])
  i3684.m_RaycastTarget = !!i3685[92]
  i3684.m_RaycastPadding = new pc.Vec4( i3685[93], i3685[94], i3685[95], i3685[96] )
  return i3684
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3692 = root || request.c( 'TMPro.VertexGradient' )
  var i3693 = data
  i3692.topLeft = new pc.Color(i3693[0], i3693[1], i3693[2], i3693[3])
  i3692.topRight = new pc.Color(i3693[4], i3693[5], i3693[6], i3693[7])
  i3692.bottomLeft = new pc.Color(i3693[8], i3693[9], i3693[10], i3693[11])
  i3692.bottomRight = new pc.Color(i3693[12], i3693[13], i3693[14], i3693[15])
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3694 = root || new pc.UnityMaterial()
  var i3695 = data
  i3694.name = i3695[0]
  request.r(i3695[1], i3695[2], 0, i3694, 'shader')
  i3694.renderQueue = i3695[3]
  i3694.enableInstancing = !!i3695[4]
  var i3697 = i3695[5]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3697[i + 0]) );
  }
  i3694.floatParameters = i3696
  var i3699 = i3695[6]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3699[i + 0]) );
  }
  i3694.colorParameters = i3698
  var i3701 = i3695[7]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3701[i + 0]) );
  }
  i3694.vectorParameters = i3700
  var i3703 = i3695[8]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3703[i + 0]) );
  }
  i3694.textureParameters = i3702
  var i3705 = i3695[9]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3705[i + 0]) );
  }
  i3694.materialFlags = i3704
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3709 = data
  i3708.name = i3709[0]
  i3708.value = i3709[1]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3713 = data
  i3712.name = i3713[0]
  i3712.value = new pc.Color(i3713[1], i3713[2], i3713[3], i3713[4])
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3717 = data
  i3716.name = i3717[0]
  i3716.value = new pc.Vec4( i3717[1], i3717[2], i3717[3], i3717[4] )
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3721 = data
  i3720.name = i3721[0]
  request.r(i3721[1], i3721[2], 0, i3720, 'value')
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3725 = data
  i3724.name = i3725[0]
  i3724.enabled = !!i3725[1]
  return i3724
}

Deserializers["TileCell"] = function (request, data, root) {
  var i3726 = root || request.c( 'TileCell' )
  var i3727 = data
  i3726.coordinate = new pc.Vec2( i3727[0], i3727[1] )
  request.r(i3727[2], i3727[3], 0, i3726, 'tileData')
  request.r(i3727[4], i3727[5], 0, i3726, 'tile')
  return i3726
}

Deserializers["Tile"] = function (request, data, root) {
  var i3728 = root || request.c( 'Tile' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'itemImage')
  request.r(i3729[2], i3729[3], 0, i3728, 'tileData')
  i3728.MovementMagnitude = i3729[4]
  i3728.MovementDuration = i3729[5]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3731 = data
  i3730.position = new pc.Vec3( i3731[0], i3731[1], i3731[2] )
  i3730.scale = new pc.Vec3( i3731[3], i3731[4], i3731[5] )
  i3730.rotation = new pc.Quat(i3731[6], i3731[7], i3731[8], i3731[9])
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3733 = data
  i3732.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3733[0], i3732.main)
  i3732.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3733[1], i3732.colorBySpeed)
  i3732.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3733[2], i3732.colorOverLifetime)
  i3732.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3733[3], i3732.emission)
  i3732.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3733[4], i3732.rotationBySpeed)
  i3732.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3733[5], i3732.rotationOverLifetime)
  i3732.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3733[6], i3732.shape)
  i3732.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3733[7], i3732.sizeBySpeed)
  i3732.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3733[8], i3732.sizeOverLifetime)
  i3732.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3733[9], i3732.textureSheetAnimation)
  i3732.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3733[10], i3732.velocityOverLifetime)
  i3732.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3733[11], i3732.noise)
  i3732.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3733[12], i3732.inheritVelocity)
  i3732.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3733[13], i3732.forceOverLifetime)
  i3732.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3733[14], i3732.limitVelocityOverLifetime)
  i3732.useAutoRandomSeed = !!i3733[15]
  i3732.randomSeed = i3733[16]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3734 = root || new pc.ParticleSystemMain()
  var i3735 = data
  i3734.duration = i3735[0]
  i3734.loop = !!i3735[1]
  i3734.prewarm = !!i3735[2]
  i3734.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[3], i3734.startDelay)
  i3734.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[4], i3734.startLifetime)
  i3734.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[5], i3734.startSpeed)
  i3734.startSize3D = !!i3735[6]
  i3734.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[7], i3734.startSizeX)
  i3734.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[8], i3734.startSizeY)
  i3734.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[9], i3734.startSizeZ)
  i3734.startRotation3D = !!i3735[10]
  i3734.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[11], i3734.startRotationX)
  i3734.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[12], i3734.startRotationY)
  i3734.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[13], i3734.startRotationZ)
  i3734.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3735[14], i3734.startColor)
  i3734.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[15], i3734.gravityModifier)
  i3734.simulationSpace = i3735[16]
  request.r(i3735[17], i3735[18], 0, i3734, 'customSimulationSpace')
  i3734.simulationSpeed = i3735[19]
  i3734.useUnscaledTime = !!i3735[20]
  i3734.scalingMode = i3735[21]
  i3734.playOnAwake = !!i3735[22]
  i3734.maxParticles = i3735[23]
  i3734.emitterVelocityMode = i3735[24]
  i3734.stopAction = i3735[25]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3736 = root || new pc.MinMaxCurve()
  var i3737 = data
  i3736.mode = i3737[0]
  i3736.curveMin = new pc.AnimationCurve( { keys_flow: i3737[1] } )
  i3736.curveMax = new pc.AnimationCurve( { keys_flow: i3737[2] } )
  i3736.curveMultiplier = i3737[3]
  i3736.constantMin = i3737[4]
  i3736.constantMax = i3737[5]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3738 = root || new pc.MinMaxGradient()
  var i3739 = data
  i3738.mode = i3739[0]
  i3738.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3739[1], i3738.gradientMin)
  i3738.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3739[2], i3738.gradientMax)
  i3738.colorMin = new pc.Color(i3739[3], i3739[4], i3739[5], i3739[6])
  i3738.colorMax = new pc.Color(i3739[7], i3739[8], i3739[9], i3739[10])
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3741 = data
  i3740.mode = i3741[0]
  var i3743 = i3741[1]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3743[i + 0]) );
  }
  i3740.colorKeys = i3742
  var i3745 = i3741[2]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3745[i + 0]) );
  }
  i3740.alphaKeys = i3744
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3746 = root || new pc.ParticleSystemColorBySpeed()
  var i3747 = data
  i3746.enabled = !!i3747[0]
  i3746.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3747[1], i3746.color)
  i3746.range = new pc.Vec2( i3747[2], i3747[3] )
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3751 = data
  i3750.color = new pc.Color(i3751[0], i3751[1], i3751[2], i3751[3])
  i3750.time = i3751[4]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3755 = data
  i3754.alpha = i3755[0]
  i3754.time = i3755[1]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3756 = root || new pc.ParticleSystemColorOverLifetime()
  var i3757 = data
  i3756.enabled = !!i3757[0]
  i3756.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3757[1], i3756.color)
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3758 = root || new pc.ParticleSystemEmitter()
  var i3759 = data
  i3758.enabled = !!i3759[0]
  i3758.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3759[1], i3758.rateOverTime)
  i3758.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3759[2], i3758.rateOverDistance)
  var i3761 = i3759[3]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3761[i + 0]) );
  }
  i3758.bursts = i3760
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3764 = root || new pc.ParticleSystemBurst()
  var i3765 = data
  i3764.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3765[0], i3764.count)
  i3764.cycleCount = i3765[1]
  i3764.minCount = i3765[2]
  i3764.maxCount = i3765[3]
  i3764.repeatInterval = i3765[4]
  i3764.time = i3765[5]
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3766 = root || new pc.ParticleSystemRotationBySpeed()
  var i3767 = data
  i3766.enabled = !!i3767[0]
  i3766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[1], i3766.x)
  i3766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[2], i3766.y)
  i3766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3767[3], i3766.z)
  i3766.separateAxes = !!i3767[4]
  i3766.range = new pc.Vec2( i3767[5], i3767[6] )
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3768 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3769 = data
  i3768.enabled = !!i3769[0]
  i3768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3769[1], i3768.x)
  i3768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3769[2], i3768.y)
  i3768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3769[3], i3768.z)
  i3768.separateAxes = !!i3769[4]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3770 = root || new pc.ParticleSystemShape()
  var i3771 = data
  i3770.enabled = !!i3771[0]
  i3770.shapeType = i3771[1]
  i3770.randomDirectionAmount = i3771[2]
  i3770.sphericalDirectionAmount = i3771[3]
  i3770.randomPositionAmount = i3771[4]
  i3770.alignToDirection = !!i3771[5]
  i3770.radius = i3771[6]
  i3770.radiusMode = i3771[7]
  i3770.radiusSpread = i3771[8]
  i3770.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3771[9], i3770.radiusSpeed)
  i3770.radiusThickness = i3771[10]
  i3770.angle = i3771[11]
  i3770.length = i3771[12]
  i3770.boxThickness = new pc.Vec3( i3771[13], i3771[14], i3771[15] )
  i3770.meshShapeType = i3771[16]
  request.r(i3771[17], i3771[18], 0, i3770, 'mesh')
  request.r(i3771[19], i3771[20], 0, i3770, 'meshRenderer')
  request.r(i3771[21], i3771[22], 0, i3770, 'skinnedMeshRenderer')
  i3770.useMeshMaterialIndex = !!i3771[23]
  i3770.meshMaterialIndex = i3771[24]
  i3770.useMeshColors = !!i3771[25]
  i3770.normalOffset = i3771[26]
  i3770.arc = i3771[27]
  i3770.arcMode = i3771[28]
  i3770.arcSpread = i3771[29]
  i3770.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3771[30], i3770.arcSpeed)
  i3770.donutRadius = i3771[31]
  i3770.position = new pc.Vec3( i3771[32], i3771[33], i3771[34] )
  i3770.rotation = new pc.Vec3( i3771[35], i3771[36], i3771[37] )
  i3770.scale = new pc.Vec3( i3771[38], i3771[39], i3771[40] )
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3772 = root || new pc.ParticleSystemSizeBySpeed()
  var i3773 = data
  i3772.enabled = !!i3773[0]
  i3772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[1], i3772.x)
  i3772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[2], i3772.y)
  i3772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3773[3], i3772.z)
  i3772.separateAxes = !!i3773[4]
  i3772.range = new pc.Vec2( i3773[5], i3773[6] )
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3774 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3775 = data
  i3774.enabled = !!i3775[0]
  i3774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3775[1], i3774.x)
  i3774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3775[2], i3774.y)
  i3774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3775[3], i3774.z)
  i3774.separateAxes = !!i3775[4]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3776 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3777 = data
  i3776.enabled = !!i3777[0]
  i3776.mode = i3777[1]
  i3776.animation = i3777[2]
  i3776.numTilesX = i3777[3]
  i3776.numTilesY = i3777[4]
  i3776.useRandomRow = !!i3777[5]
  i3776.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3777[6], i3776.frameOverTime)
  i3776.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3777[7], i3776.startFrame)
  i3776.cycleCount = i3777[8]
  i3776.rowIndex = i3777[9]
  i3776.flipU = i3777[10]
  i3776.flipV = i3777[11]
  i3776.spriteCount = i3777[12]
  var i3779 = i3777[13]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 2) {
  request.r(i3779[i + 0], i3779[i + 1], 2, i3778, '')
  }
  i3776.sprites = i3778
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3782 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3783 = data
  i3782.enabled = !!i3783[0]
  i3782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[1], i3782.x)
  i3782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[2], i3782.y)
  i3782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[3], i3782.z)
  i3782.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[4], i3782.radial)
  i3782.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[5], i3782.speedModifier)
  i3782.space = i3783[6]
  i3782.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[7], i3782.orbitalX)
  i3782.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[8], i3782.orbitalY)
  i3782.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[9], i3782.orbitalZ)
  i3782.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[10], i3782.orbitalOffsetX)
  i3782.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[11], i3782.orbitalOffsetY)
  i3782.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3783[12], i3782.orbitalOffsetZ)
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3784 = root || new pc.ParticleSystemNoise()
  var i3785 = data
  i3784.enabled = !!i3785[0]
  i3784.separateAxes = !!i3785[1]
  i3784.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[2], i3784.strengthX)
  i3784.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[3], i3784.strengthY)
  i3784.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[4], i3784.strengthZ)
  i3784.frequency = i3785[5]
  i3784.damping = !!i3785[6]
  i3784.octaveCount = i3785[7]
  i3784.octaveMultiplier = i3785[8]
  i3784.octaveScale = i3785[9]
  i3784.quality = i3785[10]
  i3784.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[11], i3784.scrollSpeed)
  i3784.scrollSpeedMultiplier = i3785[12]
  i3784.remapEnabled = !!i3785[13]
  i3784.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[14], i3784.remapX)
  i3784.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[15], i3784.remapY)
  i3784.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[16], i3784.remapZ)
  i3784.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[17], i3784.positionAmount)
  i3784.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[18], i3784.rotationAmount)
  i3784.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[19], i3784.sizeAmount)
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3786 = root || new pc.ParticleSystemInheritVelocity()
  var i3787 = data
  i3786.enabled = !!i3787[0]
  i3786.mode = i3787[1]
  i3786.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3787[2], i3786.curve)
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3788 = root || new pc.ParticleSystemForceOverLifetime()
  var i3789 = data
  i3788.enabled = !!i3789[0]
  i3788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[1], i3788.x)
  i3788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[2], i3788.y)
  i3788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3789[3], i3788.z)
  i3788.space = i3789[4]
  i3788.randomized = !!i3789[5]
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3790 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3791 = data
  i3790.enabled = !!i3791[0]
  i3790.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[1], i3790.limit)
  i3790.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[2], i3790.limitX)
  i3790.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[3], i3790.limitY)
  i3790.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[4], i3790.limitZ)
  i3790.dampen = i3791[5]
  i3790.separateAxes = !!i3791[6]
  i3790.space = i3791[7]
  i3790.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3791[8], i3790.drag)
  i3790.multiplyDragByParticleSize = !!i3791[9]
  i3790.multiplyDragByParticleVelocity = !!i3791[10]
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3793 = data
  i3792.enabled = !!i3793[0]
  request.r(i3793[1], i3793[2], 0, i3792, 'sharedMaterial')
  var i3795 = i3793[3]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 2) {
  request.r(i3795[i + 0], i3795[i + 1], 2, i3794, '')
  }
  i3792.sharedMaterials = i3794
  i3792.receiveShadows = !!i3793[4]
  i3792.shadowCastingMode = i3793[5]
  i3792.sortingLayerID = i3793[6]
  i3792.sortingOrder = i3793[7]
  i3792.lightmapIndex = i3793[8]
  i3792.lightmapSceneIndex = i3793[9]
  i3792.lightmapScaleOffset = new pc.Vec4( i3793[10], i3793[11], i3793[12], i3793[13] )
  i3792.lightProbeUsage = i3793[14]
  i3792.reflectionProbeUsage = i3793[15]
  request.r(i3793[16], i3793[17], 0, i3792, 'mesh')
  i3792.meshCount = i3793[18]
  i3792.activeVertexStreamsCount = i3793[19]
  i3792.alignment = i3793[20]
  i3792.renderMode = i3793[21]
  i3792.sortMode = i3793[22]
  i3792.lengthScale = i3793[23]
  i3792.velocityScale = i3793[24]
  i3792.cameraVelocityScale = i3793[25]
  i3792.normalDirection = i3793[26]
  i3792.sortingFudge = i3793[27]
  i3792.minParticleSize = i3793[28]
  i3792.maxParticleSize = i3793[29]
  i3792.pivot = new pc.Vec3( i3793[30], i3793[31], i3793[32] )
  request.r(i3793[33], i3793[34], 0, i3792, 'trailMaterial')
  return i3792
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i3796 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i3797 = data
  i3796.clearBehavior = i3797[0]
  i3796.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i3797[1], i3796.cameraShake)
  var i3799 = i3797[2]
  var i3798 = []
  for(var i = 0; i < i3799.length; i += 1) {
    i3798.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i3799[i + 0]) );
  }
  i3796.animatedLights = i3798
  request.r(i3797[3], i3797[4], 0, i3796, 'fadeOutReference')
  return i3796
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i3800 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i3801 = data
  i3800.camEnabled = !!i3801[0]
  i3800.useMainCamera = !!i3801[1]
  var i3803 = i3801[2]
  var i3802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i3803.length; i += 2) {
  request.r(i3803[i + 0], i3803[i + 1], 1, i3802, '')
  }
  i3800.cameras = i3802
  i3800.delay = i3801[3]
  i3800.duration = i3801[4]
  i3800.shakeSpace = i3801[5]
  i3800.shakeStrength = new pc.Vec3( i3801[6], i3801[7], i3801[8] )
  i3800.shakeCurve = new pc.AnimationCurve( { keys_flow: i3801[9] } )
  i3800.shakesDelay = i3801[10]
  return i3800
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i3808 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i3809 = data
  request.r(i3809[0], i3809[1], 0, i3808, 'light')
  i3808.loop = !!i3809[2]
  i3808.animateIntensity = !!i3809[3]
  i3808.intensityStart = i3809[4]
  i3808.intensityEnd = i3809[5]
  i3808.intensityDuration = i3809[6]
  i3808.intensityCurve = new pc.AnimationCurve( { keys_flow: i3809[7] } )
  i3808.perlinIntensity = !!i3809[8]
  i3808.perlinIntensitySpeed = i3809[9]
  i3808.fadeIn = !!i3809[10]
  i3808.fadeInDuration = i3809[11]
  i3808.fadeOut = !!i3809[12]
  i3808.fadeOutDuration = i3809[13]
  i3808.animateRange = !!i3809[14]
  i3808.rangeStart = i3809[15]
  i3808.rangeEnd = i3809[16]
  i3808.rangeDuration = i3809[17]
  i3808.rangeCurve = new pc.AnimationCurve( { keys_flow: i3809[18] } )
  i3808.perlinRange = !!i3809[19]
  i3808.perlinRangeSpeed = i3809[20]
  i3808.animateColor = !!i3809[21]
  i3808.colorGradient = i3809[22] ? new pc.ColorGradient(i3809[22][0], i3809[22][1], i3809[22][2]) : null
  i3808.colorDuration = i3809[23]
  i3808.colorCurve = new pc.AnimationCurve( { keys_flow: i3809[24] } )
  i3808.perlinColor = !!i3809[25]
  i3808.perlinColorSpeed = i3809[26]
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3811 = data
  i3810.enabled = !!i3811[0]
  i3810.type = i3811[1]
  i3810.color = new pc.Color(i3811[2], i3811[3], i3811[4], i3811[5])
  i3810.cullingMask = i3811[6]
  i3810.intensity = i3811[7]
  i3810.range = i3811[8]
  i3810.spotAngle = i3811[9]
  i3810.shadows = i3811[10]
  i3810.shadowNormalBias = i3811[11]
  i3810.shadowBias = i3811[12]
  i3810.shadowStrength = i3811[13]
  i3810.shadowResolution = i3811[14]
  i3810.lightmapBakeType = i3811[15]
  i3810.renderMode = i3811[16]
  request.r(i3811[17], i3811[18], 0, i3810, 'cookie')
  i3810.cookieSize = i3811[19]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3813 = data
  i3812.name = i3813[0]
  i3812.halfPrecision = !!i3813[1]
  i3812.useUInt32IndexFormat = !!i3813[2]
  i3812.vertexCount = i3813[3]
  i3812.aabb = i3813[4]
  var i3815 = i3813[5]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( !!i3815[i + 0] );
  }
  i3812.streams = i3814
  i3812.vertices = i3813[6]
  var i3817 = i3813[7]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3817[i + 0]) );
  }
  i3812.subMeshes = i3816
  var i3819 = i3813[8]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 16) {
    i3818.push( new pc.Mat4().setData(i3819[i + 0], i3819[i + 1], i3819[i + 2], i3819[i + 3],  i3819[i + 4], i3819[i + 5], i3819[i + 6], i3819[i + 7],  i3819[i + 8], i3819[i + 9], i3819[i + 10], i3819[i + 11],  i3819[i + 12], i3819[i + 13], i3819[i + 14], i3819[i + 15]) );
  }
  i3812.bindposes = i3818
  var i3821 = i3813[9]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3821[i + 0]) );
  }
  i3812.blendShapes = i3820
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3827 = data
  i3826.triangles = i3827[0]
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3833 = data
  i3832.name = i3833[0]
  var i3835 = i3833[1]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3835[i + 0]) );
  }
  i3832.frames = i3834
  return i3832
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i3836 = root || request.c( 'AnimatedTile' )
  var i3837 = data
  i3836.Duration = i3837[0]
  request.r(i3837[1], i3837[2], 0, i3836, 'tileData')
  var i3839 = i3837[3]
  var i3838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i3839.length; i += 3) {
    i3838.add(new pc.Vec3( i3839[i + 0], i3839[i + 1], i3839[i + 2] ));
  }
  i3836.targetPos = i3838
  var i3841 = i3837[4]
  var i3840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i3841.length; i += 3) {
    i3840.add(new pc.Vec3( i3841[i + 0], i3841[i + 1], i3841[i + 2] ));
  }
  i3836.targetPosPortrait = i3840
  var i3843 = i3837[5]
  var i3842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i3843.length; i += 3) {
    i3842.add(new pc.Vec3( i3843[i + 0], i3843[i + 1], i3843[i + 2] ));
  }
  i3836.targetPosLandscape = i3842
  var i3845 = i3837[6]
  var i3844 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.add(i3845[i + 0]);
  }
  i3836.targets = i3844
  request.r(i3837[7], i3837[8], 0, i3836, 'image')
  var i3847 = i3837[9]
  var i3846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i3847.length; i += 2) {
  request.r(i3847[i + 0], i3847[i + 1], 1, i3846, '')
  }
  i3836.vfxParticles = i3846
  request.r(i3837[10], i3837[11], 0, i3836, 'trailVFXPrefab')
  request.r(i3837[12], i3837[13], 0, i3836, 'circleTrailVFXPrefab')
  request.r(i3837[14], i3837[15], 0, i3836, 'trailRenderer')
  return i3836
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i3854 = root || request.c( 'StateEvents' )
  var i3855 = data
  i3854.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i3855[0], i3854.OnEnableEvent)
  i3854.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i3855[1], i3854.OnDisableEvent)
  i3854.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i3855[2], i3854.OnStartEvent)
  i3854.autoEnable = !!i3855[3]
  i3854.autoEnableDelay = i3855[4]
  i3854.autoDisableDelay = i3855[5]
  return i3854
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3856 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3857 = data
  i3856.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3857[0], i3856.m_PersistentCalls)
  return i3856
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3858 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3859 = data
  var i3861 = i3859[0]
  var i3860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.add(request.d('UnityEngine.Events.PersistentCall', i3861[i + 0]));
  }
  i3858.m_Calls = i3860
  return i3858
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3865 = data
  request.r(i3865[0], i3865[1], 0, i3864, 'm_Target')
  i3864.m_TargetAssemblyTypeName = i3865[2]
  i3864.m_MethodName = i3865[3]
  i3864.m_Mode = i3865[4]
  i3864.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3865[5], i3864.m_Arguments)
  i3864.m_CallState = i3865[6]
  return i3864
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3866 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3867 = data
  request.r(i3867[0], i3867[1], 0, i3866, 'm_ObjectArgument')
  i3866.m_ObjectArgumentAssemblyTypeName = i3867[2]
  i3866.m_IntArgument = i3867[3]
  i3866.m_FloatArgument = i3867[4]
  i3866.m_StringArgument = i3867[5]
  i3866.m_BoolArgument = !!i3867[6]
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3869 = data
  i3868.enabled = !!i3869[0]
  request.r(i3869[1], i3869[2], 0, i3868, 'sharedMaterial')
  var i3871 = i3869[3]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 2) {
  request.r(i3871[i + 0], i3871[i + 1], 2, i3870, '')
  }
  i3868.sharedMaterials = i3870
  i3868.receiveShadows = !!i3869[4]
  i3868.shadowCastingMode = i3869[5]
  i3868.sortingLayerID = i3869[6]
  i3868.sortingOrder = i3869[7]
  i3868.lightmapIndex = i3869[8]
  i3868.lightmapSceneIndex = i3869[9]
  i3868.lightmapScaleOffset = new pc.Vec4( i3869[10], i3869[11], i3869[12], i3869[13] )
  i3868.lightProbeUsage = i3869[14]
  i3868.reflectionProbeUsage = i3869[15]
  var i3873 = i3869[16]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 3) {
    i3872.push( new pc.Vec3( i3873[i + 0], i3873[i + 1], i3873[i + 2] ) );
  }
  i3868.positions = i3872
  i3868.positionCount = i3869[17]
  i3868.time = i3869[18]
  i3868.startWidth = i3869[19]
  i3868.endWidth = i3869[20]
  i3868.widthMultiplier = i3869[21]
  i3868.autodestruct = !!i3869[22]
  i3868.emitting = !!i3869[23]
  i3868.numCornerVertices = i3869[24]
  i3868.numCapVertices = i3869[25]
  i3868.minVertexDistance = i3869[26]
  i3868.colorGradient = i3869[27] ? new pc.ColorGradient(i3869[27][0], i3869[27][1], i3869[27][2]) : null
  i3868.startColor = new pc.Color(i3869[28], i3869[29], i3869[30], i3869[31])
  i3868.endColor = new pc.Color(i3869[32], i3869[33], i3869[34], i3869[35])
  i3868.generateLightingData = !!i3869[36]
  i3868.textureMode = i3869[37]
  i3868.alignment = i3869[38]
  i3868.widthCurve = new pc.AnimationCurve( { keys_flow: i3869[39] } )
  return i3868
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i3876 = root || request.c( 'PositionTracking' )
  var i3877 = data
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3879 = data
  i3878.name = i3879[0]
  i3878.index = i3879[1]
  i3878.startup = !!i3879[2]
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3881 = data
  i3880.enabled = !!i3881[0]
  i3880.aspect = i3881[1]
  i3880.orthographic = !!i3881[2]
  i3880.orthographicSize = i3881[3]
  i3880.backgroundColor = new pc.Color(i3881[4], i3881[5], i3881[6], i3881[7])
  i3880.nearClipPlane = i3881[8]
  i3880.farClipPlane = i3881[9]
  i3880.fieldOfView = i3881[10]
  i3880.depth = i3881[11]
  i3880.clearFlags = i3881[12]
  i3880.cullingMask = i3881[13]
  i3880.rect = i3881[14]
  request.r(i3881[15], i3881[16], 0, i3880, 'targetTexture')
  i3880.usePhysicalProperties = !!i3881[17]
  i3880.focalLength = i3881[18]
  i3880.sensorSize = new pc.Vec2( i3881[19], i3881[20] )
  i3880.lensShift = new pc.Vec2( i3881[21], i3881[22] )
  i3880.gateFit = i3881[23]
  i3880.commandBufferCount = i3881[24]
  i3880.cameraType = i3881[25]
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3883 = data
  i3882.enabled = !!i3883[0]
  i3882.planeDistance = i3883[1]
  i3882.referencePixelsPerUnit = i3883[2]
  i3882.isFallbackOverlay = !!i3883[3]
  i3882.renderMode = i3883[4]
  i3882.renderOrder = i3883[5]
  i3882.sortingLayerName = i3883[6]
  i3882.sortingOrder = i3883[7]
  i3882.scaleFactor = i3883[8]
  request.r(i3883[9], i3883[10], 0, i3882, 'worldCamera')
  i3882.overrideSorting = !!i3883[11]
  i3882.pixelPerfect = !!i3883[12]
  i3882.targetDisplay = i3883[13]
  i3882.overridePixelPerfect = !!i3883[14]
  return i3882
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3884 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3885 = data
  i3884.m_UiScaleMode = i3885[0]
  i3884.m_ReferencePixelsPerUnit = i3885[1]
  i3884.m_ScaleFactor = i3885[2]
  i3884.m_ReferenceResolution = new pc.Vec2( i3885[3], i3885[4] )
  i3884.m_ScreenMatchMode = i3885[5]
  i3884.m_MatchWidthOrHeight = i3885[6]
  i3884.m_PhysicalUnit = i3885[7]
  i3884.m_FallbackScreenDPI = i3885[8]
  i3884.m_DefaultSpriteDPI = i3885[9]
  i3884.m_DynamicPixelsPerUnit = i3885[10]
  i3884.m_PresetInfoIsWorld = !!i3885[11]
  return i3884
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3886 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3887 = data
  i3886.m_IgnoreReversedGraphics = !!i3887[0]
  i3886.m_BlockingObjects = i3887[1]
  i3886.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3887[2] )
  return i3886
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i3888 = root || request.c( 'BasicFade' )
  var i3889 = data
  request.r(i3889[0], i3889[1], 0, i3888, 'canvasGroup')
  i3888.duration = i3889[2]
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3891 = data
  i3890.m_Alpha = i3891[0]
  i3890.m_Interactable = !!i3891[1]
  i3890.m_BlocksRaycasts = !!i3891[2]
  i3890.m_IgnoreParentGroups = !!i3891[3]
  i3890.enabled = !!i3891[4]
  return i3890
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i3892 = root || request.c( 'AppearAnimation' )
  var i3893 = data
  i3892.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i3893[0], i3892.OnMovementComplete)
  i3892.fadeInDuration = i3893[1]
  i3892.fadeInDelay = i3893[2]
  i3892.fillDuration = i3893[3]
  i3892.fillDelay = i3893[4]
  i3892.targetFillAmount = i3893[5]
  i3892.initialFillAmount = i3893[6]
  return i3892
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i3894 = root || request.c( 'PlayerGuide' )
  var i3895 = data
  var i3897 = i3895[0]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3897.length; i += 2) {
  request.r(i3897[i + 0], i3897[i + 1], 1, i3896, '')
  }
  i3894.prompts = i3896
  return i3894
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3900 = root || request.c( 'UnityEngine.UI.Button' )
  var i3901 = data
  i3900.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3901[0], i3900.m_OnClick)
  i3900.m_Navigation = request.d('UnityEngine.UI.Navigation', i3901[1], i3900.m_Navigation)
  i3900.m_Transition = i3901[2]
  i3900.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3901[3], i3900.m_Colors)
  i3900.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3901[4], i3900.m_SpriteState)
  i3900.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3901[5], i3900.m_AnimationTriggers)
  i3900.m_Interactable = !!i3901[6]
  request.r(i3901[7], i3901[8], 0, i3900, 'm_TargetGraphic')
  return i3900
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3902 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3903 = data
  i3902.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3903[0], i3902.m_PersistentCalls)
  return i3902
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3904 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3905 = data
  i3904.m_Mode = i3905[0]
  i3904.m_WrapAround = !!i3905[1]
  request.r(i3905[2], i3905[3], 0, i3904, 'm_SelectOnUp')
  request.r(i3905[4], i3905[5], 0, i3904, 'm_SelectOnDown')
  request.r(i3905[6], i3905[7], 0, i3904, 'm_SelectOnLeft')
  request.r(i3905[8], i3905[9], 0, i3904, 'm_SelectOnRight')
  return i3904
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3906 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3907 = data
  i3906.m_NormalColor = new pc.Color(i3907[0], i3907[1], i3907[2], i3907[3])
  i3906.m_HighlightedColor = new pc.Color(i3907[4], i3907[5], i3907[6], i3907[7])
  i3906.m_PressedColor = new pc.Color(i3907[8], i3907[9], i3907[10], i3907[11])
  i3906.m_SelectedColor = new pc.Color(i3907[12], i3907[13], i3907[14], i3907[15])
  i3906.m_DisabledColor = new pc.Color(i3907[16], i3907[17], i3907[18], i3907[19])
  i3906.m_ColorMultiplier = i3907[20]
  i3906.m_FadeDuration = i3907[21]
  return i3906
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3908 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3909 = data
  request.r(i3909[0], i3909[1], 0, i3908, 'm_HighlightedSprite')
  request.r(i3909[2], i3909[3], 0, i3908, 'm_PressedSprite')
  request.r(i3909[4], i3909[5], 0, i3908, 'm_SelectedSprite')
  request.r(i3909[6], i3909[7], 0, i3908, 'm_DisabledSprite')
  return i3908
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3910 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3911 = data
  i3910.m_NormalTrigger = i3911[0]
  i3910.m_HighlightedTrigger = i3911[1]
  i3910.m_PressedTrigger = i3911[2]
  i3910.m_SelectedTrigger = i3911[3]
  i3910.m_DisabledTrigger = i3911[4]
  return i3910
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i3912 = root || request.c( 'RectAnimator' )
  var i3913 = data
  request.r(i3913[0], i3913[1], 0, i3912, 'rectTransform')
  i3912.animateScale = !!i3913[2]
  i3912.isScaleLooping = !!i3913[3]
  i3912.scaleTo = i3913[4]
  i3912.scaleDuration = i3913[5]
  i3912.scaleEaseType = i3913[6]
  i3912.scaleStartDelay = i3913[7]
  i3912.animateMove = !!i3913[8]
  i3912.isMoveLooping = !!i3913[9]
  i3912.moveTo = new pc.Vec2( i3913[10], i3913[11] )
  i3912.moveDuration = i3913[12]
  i3912.moveEaseType = i3913[13]
  i3912.moveLoopType = i3913[14]
  i3912.moveStartDelay = i3913[15]
  i3912.initialPos = new pc.Vec3( i3913[16], i3913[17], i3913[18] )
  i3912.initialScale = new pc.Vec3( i3913[19], i3913[20], i3913[21] )
  return i3912
}

Deserializers["TileManager"] = function (request, data, root) {
  var i3914 = root || request.c( 'TileManager' )
  var i3915 = data
  i3914.cellWidth = i3915[0]
  i3914.cellHeight = i3915[1]
  request.r(i3915[2], i3915[3], 0, i3914, 'canvasGroup')
  var i3917 = i3915[4]
  var i3916 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i3917.length; i += 2) {
  request.r(i3917[i + 0], i3917[i + 1], 1, i3916, '')
  }
  i3914.cells = i3916
  var i3919 = i3915[5]
  var i3918 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i3919.length; i += 2) {
  request.r(i3919[i + 0], i3919[i + 1], 1, i3918, '')
  }
  i3914.tileDataPool = i3918
  i3914.GridHeight = i3915[6]
  i3914.SequenceDelay = i3915[7]
  i3914.BreakDelay = i3915[8]
  i3914.FallDelay = i3915[9]
  i3914.CheckDelay = i3915[10]
  i3914.levelColorValues = i3915[11]
  var i3921 = i3915[12]
  var i3920 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i3921.length; i += 2) {
  request.r(i3921[i + 0], i3921[i + 1], 1, i3920, '')
  }
  i3914.powerupDataPool = i3920
  request.r(i3915[13], i3915[14], 0, i3914, 'dynamitePowerup')
  return i3914
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i3926 = root || request.c( 'SpecialTileManager' )
  var i3927 = data
  request.r(i3927[0], i3927[1], 0, i3926, 'tileManager')
  var i3929 = i3927[2]
  var i3928 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i3929.length; i += 2) {
  request.r(i3929[i + 0], i3929[i + 1], 1, i3928, '')
  }
  i3926.cellList = i3928
  return i3926
}

Deserializers["TransformOrientation"] = function (request, data, root) {
  var i3930 = root || request.c( 'TransformOrientation' )
  var i3931 = data
  i3930._objectSwapMode = !!i3931[0]
  request.r(i3931[1], i3931[2], 0, i3930, '_portraitObject')
  request.r(i3931[3], i3931[4], 0, i3930, '_landscapeObject')
  i3930._orientationSettings = request.d('TransformOrientation+RectTransformOrientationSettings', i3931[5], i3930._orientationSettings)
  return i3930
}

Deserializers["TransformOrientation+RectTransformOrientationSettings"] = function (request, data, root) {
  var i3932 = root || request.c( 'TransformOrientation+RectTransformOrientationSettings' )
  var i3933 = data
  i3932.PortraitValues = request.d('TransformOrientation+RectTransformValues', i3933[0], i3932.PortraitValues)
  i3932.LandscapeValues = request.d('TransformOrientation+RectTransformValues', i3933[1], i3932.LandscapeValues)
  return i3932
}

Deserializers["TransformOrientation+RectTransformValues"] = function (request, data, root) {
  var i3934 = root || request.c( 'TransformOrientation+RectTransformValues' )
  var i3935 = data
  i3934.AnchoredPosition = new pc.Vec2( i3935[0], i3935[1] )
  i3934.SizeDelta = new pc.Vec2( i3935[2], i3935[3] )
  i3934.Scale = new pc.Vec3( i3935[4], i3935[5], i3935[6] )
  return i3934
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3936 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3937 = data
  i3936.m_Spacing = i3937[0]
  i3936.m_ChildForceExpandWidth = !!i3937[1]
  i3936.m_ChildForceExpandHeight = !!i3937[2]
  i3936.m_ChildControlWidth = !!i3937[3]
  i3936.m_ChildControlHeight = !!i3937[4]
  i3936.m_ChildScaleWidth = !!i3937[5]
  i3936.m_ChildScaleHeight = !!i3937[6]
  i3936.m_ReverseArrangement = !!i3937[7]
  i3936.m_Padding = UnityEngine.RectOffset.FromPaddings(i3937[8], i3937[9], i3937[10], i3937[11])
  i3936.m_ChildAlignment = i3937[12]
  return i3936
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i3938 = root || request.c( 'UIMoveTo' )
  var i3939 = data
  request.r(i3939[0], i3939[1], 0, i3938, 'imageTransform')
  i3938.targetPosition = new pc.Vec2( i3939[2], i3939[3] )
  i3938.anticipationOffset = i3939[4]
  i3938.duration = i3939[5]
  i3938.enableOnStart = !!i3939[6]
  i3938.delayBeforeStart = i3939[7]
  i3938.delayBeforeEnd = i3939[8]
  i3938.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i3939[9], i3938.OnMovementStart)
  i3938.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i3939[10], i3938.OnMovementComplete)
  var i3941 = i3939[11]
  var i3940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3941.length; i += 2) {
  request.r(i3941[i + 0], i3941[i + 1], 1, i3940, '')
  }
  i3938.objectsToEnable = i3940
  return i3938
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i3942 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i3943 = data
  i3942.m_StartCorner = i3943[0]
  i3942.m_StartAxis = i3943[1]
  i3942.m_CellSize = new pc.Vec2( i3943[2], i3943[3] )
  i3942.m_Spacing = new pc.Vec2( i3943[4], i3943[5] )
  i3942.m_Constraint = i3943[6]
  i3942.m_ConstraintCount = i3943[7]
  i3942.m_Padding = UnityEngine.RectOffset.FromPaddings(i3943[8], i3943[9], i3943[10], i3943[11])
  i3942.m_ChildAlignment = i3943[12]
  return i3942
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3944 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3945 = data
  i3944.m_ShowMaskGraphic = !!i3945[0]
  return i3944
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i3946 = root || request.c( 'AnimatedTileSpawner' )
  var i3947 = data
  var i3949 = i3947[0]
  var i3948 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i3949.length; i += 2) {
  request.r(i3949[i + 0], i3949[i + 1], 1, i3948, '')
  }
  i3946.tiles = i3948
  return i3946
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i3952 = root || request.c( 'DynamiteEffect' )
  var i3953 = data
  i3952.initialScale = new pc.Vec3( i3953[0], i3953[1], i3953[2] )
  i3952.targetPos = new pc.Vec3( i3953[3], i3953[4], i3953[5] )
  i3952.duration = i3953[6]
  request.r(i3953[7], i3953[8], 0, i3952, 'model')
  request.r(i3953[9], i3953[10], 0, i3952, 'explosionEffectPrefab')
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3955 = data
  i3954.enabled = !!i3955[0]
  request.r(i3955[1], i3955[2], 0, i3954, 'sharedMaterial')
  var i3957 = i3955[3]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 2) {
  request.r(i3957[i + 0], i3957[i + 1], 2, i3956, '')
  }
  i3954.sharedMaterials = i3956
  i3954.receiveShadows = !!i3955[4]
  i3954.shadowCastingMode = i3955[5]
  i3954.sortingLayerID = i3955[6]
  i3954.sortingOrder = i3955[7]
  i3954.lightmapIndex = i3955[8]
  i3954.lightmapSceneIndex = i3955[9]
  i3954.lightmapScaleOffset = new pc.Vec4( i3955[10], i3955[11], i3955[12], i3955[13] )
  i3954.lightProbeUsage = i3955[14]
  i3954.reflectionProbeUsage = i3955[15]
  i3954.color = new pc.Color(i3955[16], i3955[17], i3955[18], i3955[19])
  request.r(i3955[20], i3955[21], 0, i3954, 'sprite')
  i3954.flipX = !!i3955[22]
  i3954.flipY = !!i3955[23]
  i3954.drawMode = i3955[24]
  i3954.size = new pc.Vec2( i3955[25], i3955[26] )
  i3954.tileMode = i3955[27]
  i3954.adaptiveModeThreshold = i3955[28]
  i3954.maskInteraction = i3955[29]
  i3954.spriteSortPoint = i3955[30]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3959 = data
  request.r(i3959[0], i3959[1], 0, i3958, 'animatorController')
  request.r(i3959[2], i3959[3], 0, i3958, 'avatar')
  i3958.updateMode = i3959[4]
  i3958.hasTransformHierarchy = !!i3959[5]
  i3958.applyRootMotion = !!i3959[6]
  var i3961 = i3959[7]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 2) {
  request.r(i3961[i + 0], i3961[i + 1], 2, i3960, '')
  }
  i3958.humanBones = i3960
  i3958.enabled = !!i3959[8]
  return i3958
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i3964 = root || request.c( 'MergeHands' )
  var i3965 = data
  request.r(i3965[0], i3965[1], 0, i3964, 'rectTransform')
  request.r(i3965[2], i3965[3], 0, i3964, 'target1')
  request.r(i3965[4], i3965[5], 0, i3964, 'target2')
  return i3964
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3966 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3967 = data
  request.r(i3967[0], i3967[1], 0, i3966, 'm_FirstSelected')
  i3966.m_sendNavigationEvents = !!i3967[2]
  i3966.m_DragThreshold = i3967[3]
  return i3966
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3968 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3969 = data
  i3968.m_HorizontalAxis = i3969[0]
  i3968.m_VerticalAxis = i3969[1]
  i3968.m_SubmitButton = i3969[2]
  i3968.m_CancelButton = i3969[3]
  i3968.m_InputActionsPerSecond = i3969[4]
  i3968.m_RepeatDelay = i3969[5]
  i3968.m_ForceModuleActive = !!i3969[6]
  i3968.m_SendPointerHoverToParent = !!i3969[7]
  return i3968
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3970 = root || request.c( 'GameManager' )
  var i3971 = data
  i3970.IsSIP = !!i3971[0]
  i3970.gameType = i3971[1]
  i3970.toggleInactivityPanel = !!i3971[2]
  i3970.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i3971[3], i3970.OnStartMIP1)
  i3970.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i3971[4], i3970.OnStartMIP2)
  i3970.IsDoneCollecting = !!i3971[5]
  i3970.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i3971[6], i3970.OnLevelComplete)
  request.r(i3971[7], i3971[8], 0, i3970, 'TutorialPanel')
  request.r(i3971[9], i3971[10], 0, i3970, 'GamePanel')
  request.r(i3971[11], i3971[12], 0, i3970, 'EndCard')
  request.r(i3971[13], i3971[14], 0, i3970, 'CTAPanel')
  request.r(i3971[15], i3971[16], 0, i3970, 'FailPanel')
  request.r(i3971[17], i3971[18], 0, i3970, 'EndCardInActivityPanel')
  i3970.iosLink = i3971[19]
  i3970.androidLink = i3971[20]
  i3970.hasTimer = !!i3971[21]
  i3970.currentTimer = i3971[22]
  i3970.maxTime = i3971[23]
  i3970.gameOver = !!i3971[24]
  request.r(i3971[25], i3971[26], 0, i3970, 'inactivityPanel')
  request.r(i3971[27], i3971[28], 0, i3970, 'inactivityPanelGame')
  i3970.inactivityTime = i3971[29]
  i3970.inactivityTimer = i3971[30]
  request.r(i3971[31], i3971[32], 0, i3970, 'timerText')
  var i3973 = i3971[33]
  var i3972 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i3973.length; i += 1) {
    i3972.add(request.d('GameManager+FurnitureItems', i3973[i + 0]));
  }
  i3970.items = i3972
  i3970.CurrentLevel = i3971[34]
  var i3975 = i3971[35]
  var i3974 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i3975.length; i += 1) {
    i3974.add(request.d('GameManager+FurnitureItems', i3975[i + 0]));
  }
  i3970.currentFurnitures = i3974
  var i3977 = i3971[36]
  var i3976 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i3977.length; i += 2) {
  request.r(i3977[i + 0], i3977[i + 1], 1, i3976, '')
  }
  i3970.gameBoards = i3976
  var i3979 = i3971[37]
  var i3978 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i3979.length; i += 2) {
  request.r(i3979[i + 0], i3979[i + 1], 1, i3978, '')
  }
  i3970.furnitureDecorations = i3978
  var i3981 = i3971[38]
  var i3980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3981.length; i += 2) {
  request.r(i3981[i + 0], i3981[i + 1], 1, i3980, '')
  }
  i3970.mip1Objects = i3980
  var i3983 = i3971[39]
  var i3982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3983.length; i += 2) {
  request.r(i3983[i + 0], i3983[i + 1], 1, i3982, '')
  }
  i3970.mip2Objects = i3982
  var i3985 = i3971[40]
  var i3984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3985.length; i += 2) {
  request.r(i3985[i + 0], i3985[i + 1], 1, i3984, '')
  }
  i3970.Feedback = i3984
  var i3987 = i3971[41]
  var i3986 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.add(i3987[i + 0]);
  }
  i3970.audioKeys = i3986
  var i3989 = i3971[42]
  var i3988 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.add(i3989[i + 0]);
  }
  i3970.cameraPanLocation = i3988
  request.r(i3971[43], i3971[44], 0, i3970, 'cameraPanObject')
  i3970.mip1ButtonPress = !!i3971[45]
  i3970.puzzlesToSolve = i3971[46]
  var i3991 = i3971[47]
  var i3990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3991.length; i += 2) {
  request.r(i3991[i + 0], i3991[i + 1], 1, i3990, '')
  }
  i3970.redirectButtons = i3990
  return i3970
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i3994 = root || request.c( 'GameManager+FurnitureItems' )
  var i3995 = data
  i3994.key = i3995[0]
  request.r(i3995[1], i3995[2], 0, i3994, 'value')
  return i3994
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i4002 = root || request.c( 'AudioManager' )
  var i4003 = data
  request.r(i4003[0], i4003[1], 0, i4002, 'library')
  i4002.sfxPoolSize = i4003[2]
  return i4002
}

Deserializers["GameOrientationHandler"] = function (request, data, root) {
  var i4004 = root || request.c( 'GameOrientationHandler' )
  var i4005 = data
  i4004._previewOrientation = i4005[0]
  i4004._portraitRef = new pc.Vec2( i4005[1], i4005[2] )
  i4004._landscapeRef = new pc.Vec2( i4005[3], i4005[4] )
  var i4007 = i4005[5]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 2) {
  request.r(i4007[i + 0], i4007[i + 1], 2, i4006, '')
  }
  i4004._orientationSwitchers = i4006
  var i4009 = i4005[6]
  var i4008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.CanvasScaler')))
  for(var i = 0; i < i4009.length; i += 2) {
  request.r(i4009[i + 0], i4009[i + 1], 1, i4008, '')
  }
  i4004._canvasScalers = i4008
  var i4011 = i4005[7]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 2) {
  request.r(i4011[i + 0], i4011[i + 1], 2, i4010, '')
  }
  i4004._bgScalers = i4010
  return i4004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4019 = data
  i4018.ambientIntensity = i4019[0]
  i4018.reflectionIntensity = i4019[1]
  i4018.ambientMode = i4019[2]
  i4018.ambientLight = new pc.Color(i4019[3], i4019[4], i4019[5], i4019[6])
  i4018.ambientSkyColor = new pc.Color(i4019[7], i4019[8], i4019[9], i4019[10])
  i4018.ambientGroundColor = new pc.Color(i4019[11], i4019[12], i4019[13], i4019[14])
  i4018.ambientEquatorColor = new pc.Color(i4019[15], i4019[16], i4019[17], i4019[18])
  i4018.fogColor = new pc.Color(i4019[19], i4019[20], i4019[21], i4019[22])
  i4018.fogEndDistance = i4019[23]
  i4018.fogStartDistance = i4019[24]
  i4018.fogDensity = i4019[25]
  i4018.fog = !!i4019[26]
  request.r(i4019[27], i4019[28], 0, i4018, 'skybox')
  i4018.fogMode = i4019[29]
  var i4021 = i4019[30]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4021[i + 0]) );
  }
  i4018.lightmaps = i4020
  i4018.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4019[31], i4018.lightProbes)
  i4018.lightmapsMode = i4019[32]
  i4018.mixedBakeMode = i4019[33]
  i4018.environmentLightingMode = i4019[34]
  i4018.ambientProbe = new pc.SphericalHarmonicsL2(i4019[35])
  i4018.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4019[36])
  i4018.useReferenceAmbientProbe = !!i4019[37]
  request.r(i4019[38], i4019[39], 0, i4018, 'customReflection')
  request.r(i4019[40], i4019[41], 0, i4018, 'defaultReflection')
  i4018.defaultReflectionMode = i4019[42]
  i4018.defaultReflectionResolution = i4019[43]
  i4018.sunLightObjectId = i4019[44]
  i4018.pixelLightCount = i4019[45]
  i4018.defaultReflectionHDR = !!i4019[46]
  i4018.hasLightDataAsset = !!i4019[47]
  i4018.hasManualGenerate = !!i4019[48]
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4025 = data
  request.r(i4025[0], i4025[1], 0, i4024, 'lightmapColor')
  request.r(i4025[2], i4025[3], 0, i4024, 'lightmapDirection')
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4026 = root || new UnityEngine.LightProbes()
  var i4027 = data
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4033 = data
  var i4035 = i4033[0]
  var i4034 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4035[i + 0]));
  }
  i4032.ShaderCompilationErrors = i4034
  i4032.name = i4033[1]
  i4032.guid = i4033[2]
  var i4037 = i4033[3]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( i4037[i + 0] );
  }
  i4032.shaderDefinedKeywords = i4036
  var i4039 = i4033[4]
  var i4038 = []
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4039[i + 0]) );
  }
  i4032.passes = i4038
  var i4041 = i4033[5]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4041[i + 0]) );
  }
  i4032.usePasses = i4040
  var i4043 = i4033[6]
  var i4042 = []
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4043[i + 0]) );
  }
  i4032.defaultParameterValues = i4042
  request.r(i4033[7], i4033[8], 0, i4032, 'unityFallbackShader')
  i4032.readDepth = !!i4033[9]
  i4032.isCreatedByShaderGraph = !!i4033[10]
  i4032.compiled = !!i4033[11]
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4047 = data
  i4046.shaderName = i4047[0]
  i4046.errorMessage = i4047[1]
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4052 = root || new pc.UnityShaderPass()
  var i4053 = data
  i4052.id = i4053[0]
  i4052.subShaderIndex = i4053[1]
  i4052.name = i4053[2]
  i4052.passType = i4053[3]
  i4052.grabPassTextureName = i4053[4]
  i4052.usePass = !!i4053[5]
  i4052.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[6], i4052.zTest)
  i4052.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[7], i4052.zWrite)
  i4052.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[8], i4052.culling)
  i4052.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4053[9], i4052.blending)
  i4052.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4053[10], i4052.alphaBlending)
  i4052.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[11], i4052.colorWriteMask)
  i4052.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[12], i4052.offsetUnits)
  i4052.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[13], i4052.offsetFactor)
  i4052.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[14], i4052.stencilRef)
  i4052.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[15], i4052.stencilReadMask)
  i4052.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[16], i4052.stencilWriteMask)
  i4052.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4053[17], i4052.stencilOp)
  i4052.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4053[18], i4052.stencilOpFront)
  i4052.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4053[19], i4052.stencilOpBack)
  var i4055 = i4053[20]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4055[i + 0]) );
  }
  i4052.tags = i4054
  var i4057 = i4053[21]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( i4057[i + 0] );
  }
  i4052.passDefinedKeywords = i4056
  var i4059 = i4053[22]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4059[i + 0]) );
  }
  i4052.passDefinedKeywordGroups = i4058
  var i4061 = i4053[23]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4061[i + 0]) );
  }
  i4052.variants = i4060
  var i4063 = i4053[24]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4063[i + 0]) );
  }
  i4052.excludedVariants = i4062
  i4052.hasDepthReader = !!i4053[25]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4065 = data
  i4064.val = i4065[0]
  i4064.name = i4065[1]
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4067 = data
  i4066.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4067[0], i4066.src)
  i4066.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4067[1], i4066.dst)
  i4066.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4067[2], i4066.op)
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4069 = data
  i4068.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[0], i4068.pass)
  i4068.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[1], i4068.fail)
  i4068.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[2], i4068.zFail)
  i4068.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[3], i4068.comp)
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4073 = data
  i4072.name = i4073[0]
  i4072.value = i4073[1]
  return i4072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4077 = data
  var i4079 = i4077[0]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( i4079[i + 0] );
  }
  i4076.keywords = i4078
  i4076.hasDiscard = !!i4077[1]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4083 = data
  i4082.passId = i4083[0]
  i4082.subShaderIndex = i4083[1]
  var i4085 = i4083[2]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( i4085[i + 0] );
  }
  i4082.keywords = i4084
  i4082.vertexProgram = i4083[3]
  i4082.fragmentProgram = i4083[4]
  i4082.exportedForWebGl2 = !!i4083[5]
  i4082.readDepth = !!i4083[6]
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4089 = data
  request.r(i4089[0], i4089[1], 0, i4088, 'shader')
  i4088.pass = i4089[2]
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4093 = data
  i4092.name = i4093[0]
  i4092.type = i4093[1]
  i4092.value = new pc.Vec4( i4093[2], i4093[3], i4093[4], i4093[5] )
  i4092.textureValue = i4093[6]
  i4092.shaderPropertyFlag = i4093[7]
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4095 = data
  i4094.name = i4095[0]
  request.r(i4095[1], i4095[2], 0, i4094, 'texture')
  i4094.aabb = i4095[3]
  i4094.vertices = i4095[4]
  i4094.triangles = i4095[5]
  i4094.textureRect = UnityEngine.Rect.MinMaxRect(i4095[6], i4095[7], i4095[8], i4095[9])
  i4094.packedRect = UnityEngine.Rect.MinMaxRect(i4095[10], i4095[11], i4095[12], i4095[13])
  i4094.border = new pc.Vec4( i4095[14], i4095[15], i4095[16], i4095[17] )
  i4094.transparency = i4095[18]
  i4094.bounds = i4095[19]
  i4094.pixelsPerUnit = i4095[20]
  i4094.textureWidth = i4095[21]
  i4094.textureHeight = i4095[22]
  i4094.nativeSize = new pc.Vec2( i4095[23], i4095[24] )
  i4094.pivot = new pc.Vec2( i4095[25], i4095[26] )
  i4094.textureRectOffset = new pc.Vec2( i4095[27], i4095[28] )
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4097 = data
  i4096.name = i4097[0]
  return i4096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4099 = data
  i4098.name = i4099[0]
  i4098.wrapMode = i4099[1]
  i4098.isLooping = !!i4099[2]
  i4098.length = i4099[3]
  var i4101 = i4099[4]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4101[i + 0]) );
  }
  i4098.curves = i4100
  var i4103 = i4099[5]
  var i4102 = []
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4103[i + 0]) );
  }
  i4098.events = i4102
  i4098.halfPrecision = !!i4099[6]
  i4098._frameRate = i4099[7]
  i4098.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4099[8], i4098.localBounds)
  i4098.hasMuscleCurves = !!i4099[9]
  var i4105 = i4099[10]
  var i4104 = []
  for(var i = 0; i < i4105.length; i += 1) {
    i4104.push( i4105[i + 0] );
  }
  i4098.clipMuscleConstant = i4104
  i4098.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4099[11], i4098.clipBindingConstant)
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4109 = data
  i4108.path = i4109[0]
  i4108.hash = i4109[1]
  i4108.componentType = i4109[2]
  i4108.property = i4109[3]
  i4108.keys = i4109[4]
  var i4111 = i4109[5]
  var i4110 = []
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4111[i + 0]) );
  }
  i4108.objectReferenceKeys = i4110
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4115 = data
  i4114.time = i4115[0]
  request.r(i4115[1], i4115[2], 0, i4114, 'value')
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4119 = data
  i4118.functionName = i4119[0]
  i4118.floatParameter = i4119[1]
  i4118.intParameter = i4119[2]
  i4118.stringParameter = i4119[3]
  request.r(i4119[4], i4119[5], 0, i4118, 'objectReferenceParameter')
  i4118.time = i4119[6]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4121 = data
  i4120.center = new pc.Vec3( i4121[0], i4121[1], i4121[2] )
  i4120.extends = new pc.Vec3( i4121[3], i4121[4], i4121[5] )
  return i4120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4125 = data
  var i4127 = i4125[0]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.push( i4127[i + 0] );
  }
  i4124.genericBindings = i4126
  var i4129 = i4125[1]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.push( i4129[i + 0] );
  }
  i4124.pptrCurveMapping = i4128
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4131 = data
  i4130.name = i4131[0]
  i4130.ascent = i4131[1]
  i4130.originalLineHeight = i4131[2]
  i4130.fontSize = i4131[3]
  var i4133 = i4131[4]
  var i4132 = []
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4133[i + 0]) );
  }
  i4130.characterInfo = i4132
  request.r(i4131[5], i4131[6], 0, i4130, 'texture')
  i4130.originalFontSize = i4131[7]
  return i4130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4137 = data
  i4136.index = i4137[0]
  i4136.advance = i4137[1]
  i4136.bearing = i4137[2]
  i4136.glyphWidth = i4137[3]
  i4136.glyphHeight = i4137[4]
  i4136.minX = i4137[5]
  i4136.maxX = i4137[6]
  i4136.minY = i4137[7]
  i4136.maxY = i4137[8]
  i4136.uvBottomLeftX = i4137[9]
  i4136.uvBottomLeftY = i4137[10]
  i4136.uvBottomRightX = i4137[11]
  i4136.uvBottomRightY = i4137[12]
  i4136.uvTopLeftX = i4137[13]
  i4136.uvTopLeftY = i4137[14]
  i4136.uvTopRightX = i4137[15]
  i4136.uvTopRightY = i4137[16]
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4139 = data
  i4138.name = i4139[0]
  var i4141 = i4139[1]
  var i4140 = []
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4141[i + 0]) );
  }
  i4138.layers = i4140
  var i4143 = i4139[2]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 1) {
    i4142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4143[i + 0]) );
  }
  i4138.parameters = i4142
  i4138.animationClips = i4139[3]
  i4138.avatarUnsupported = i4139[4]
  return i4138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4147 = data
  i4146.name = i4147[0]
  i4146.defaultWeight = i4147[1]
  i4146.blendingMode = i4147[2]
  i4146.avatarMask = i4147[3]
  i4146.syncedLayerIndex = i4147[4]
  i4146.syncedLayerAffectsTiming = !!i4147[5]
  i4146.syncedLayers = i4147[6]
  i4146.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4147[7], i4146.stateMachine)
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4149 = data
  i4148.id = i4149[0]
  i4148.name = i4149[1]
  i4148.path = i4149[2]
  var i4151 = i4149[3]
  var i4150 = []
  for(var i = 0; i < i4151.length; i += 1) {
    i4150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4151[i + 0]) );
  }
  i4148.states = i4150
  var i4153 = i4149[4]
  var i4152 = []
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4153[i + 0]) );
  }
  i4148.machines = i4152
  var i4155 = i4149[5]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4155[i + 0]) );
  }
  i4148.entryStateTransitions = i4154
  var i4157 = i4149[6]
  var i4156 = []
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4157[i + 0]) );
  }
  i4148.exitStateTransitions = i4156
  var i4159 = i4149[7]
  var i4158 = []
  for(var i = 0; i < i4159.length; i += 1) {
    i4158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4159[i + 0]) );
  }
  i4148.anyStateTransitions = i4158
  i4148.defaultStateId = i4149[8]
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4163 = data
  i4162.id = i4163[0]
  i4162.name = i4163[1]
  i4162.cycleOffset = i4163[2]
  i4162.cycleOffsetParameter = i4163[3]
  i4162.cycleOffsetParameterActive = !!i4163[4]
  i4162.mirror = !!i4163[5]
  i4162.mirrorParameter = i4163[6]
  i4162.mirrorParameterActive = !!i4163[7]
  i4162.motionId = i4163[8]
  i4162.nameHash = i4163[9]
  i4162.fullPathHash = i4163[10]
  i4162.speed = i4163[11]
  i4162.speedParameter = i4163[12]
  i4162.speedParameterActive = !!i4163[13]
  i4162.tag = i4163[14]
  i4162.tagHash = i4163[15]
  i4162.writeDefaultValues = !!i4163[16]
  var i4165 = i4163[17]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 2) {
  request.r(i4165[i + 0], i4165[i + 1], 2, i4164, '')
  }
  i4162.behaviours = i4164
  var i4167 = i4163[18]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4167[i + 0]) );
  }
  i4162.transitions = i4166
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4173 = data
  i4172.fullPath = i4173[0]
  i4172.canTransitionToSelf = !!i4173[1]
  i4172.duration = i4173[2]
  i4172.exitTime = i4173[3]
  i4172.hasExitTime = !!i4173[4]
  i4172.hasFixedDuration = !!i4173[5]
  i4172.interruptionSource = i4173[6]
  i4172.offset = i4173[7]
  i4172.orderedInterruption = !!i4173[8]
  i4172.destinationStateId = i4173[9]
  i4172.isExit = !!i4173[10]
  i4172.mute = !!i4173[11]
  i4172.solo = !!i4173[12]
  var i4175 = i4173[13]
  var i4174 = []
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4175[i + 0]) );
  }
  i4172.conditions = i4174
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4181 = data
  i4180.destinationStateId = i4181[0]
  i4180.isExit = !!i4181[1]
  i4180.mute = !!i4181[2]
  i4180.solo = !!i4181[3]
  var i4183 = i4181[4]
  var i4182 = []
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4183[i + 0]) );
  }
  i4180.conditions = i4182
  return i4180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4187 = data
  i4186.defaultBool = !!i4187[0]
  i4186.defaultFloat = i4187[1]
  i4186.defaultInt = i4187[2]
  i4186.name = i4187[3]
  i4186.nameHash = i4187[4]
  i4186.type = i4187[5]
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4189 = data
  i4188.name = i4189[0]
  i4188.bytes64 = i4189[1]
  i4188.data = i4189[2]
  return i4188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4190 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4191 = data
  i4190.hashCode = i4191[0]
  request.r(i4191[1], i4191[2], 0, i4190, 'material')
  i4190.materialHashCode = i4191[3]
  request.r(i4191[4], i4191[5], 0, i4190, 'atlas')
  i4190.normalStyle = i4191[6]
  i4190.normalSpacingOffset = i4191[7]
  i4190.boldStyle = i4191[8]
  i4190.boldSpacing = i4191[9]
  i4190.italicStyle = i4191[10]
  i4190.tabSize = i4191[11]
  i4190.m_Version = i4191[12]
  i4190.m_SourceFontFileGUID = i4191[13]
  request.r(i4191[14], i4191[15], 0, i4190, 'm_SourceFontFile_EditorRef')
  request.r(i4191[16], i4191[17], 0, i4190, 'm_SourceFontFile')
  i4190.m_AtlasPopulationMode = i4191[18]
  i4190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4191[19], i4190.m_FaceInfo)
  var i4193 = i4191[20]
  var i4192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4193.length; i += 1) {
    i4192.add(request.d('UnityEngine.TextCore.Glyph', i4193[i + 0]));
  }
  i4190.m_GlyphTable = i4192
  var i4195 = i4191[21]
  var i4194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4195.length; i += 1) {
    i4194.add(request.d('TMPro.TMP_Character', i4195[i + 0]));
  }
  i4190.m_CharacterTable = i4194
  var i4197 = i4191[22]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 2) {
  request.r(i4197[i + 0], i4197[i + 1], 2, i4196, '')
  }
  i4190.m_AtlasTextures = i4196
  i4190.m_AtlasTextureIndex = i4191[23]
  i4190.m_IsMultiAtlasTexturesEnabled = !!i4191[24]
  i4190.m_ClearDynamicDataOnBuild = !!i4191[25]
  var i4199 = i4191[26]
  var i4198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4199.length; i += 1) {
    i4198.add(request.d('UnityEngine.TextCore.GlyphRect', i4199[i + 0]));
  }
  i4190.m_UsedGlyphRects = i4198
  var i4201 = i4191[27]
  var i4200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.add(request.d('UnityEngine.TextCore.GlyphRect', i4201[i + 0]));
  }
  i4190.m_FreeGlyphRects = i4200
  i4190.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4191[28], i4190.m_fontInfo)
  i4190.m_AtlasWidth = i4191[29]
  i4190.m_AtlasHeight = i4191[30]
  i4190.m_AtlasPadding = i4191[31]
  i4190.m_AtlasRenderMode = i4191[32]
  var i4203 = i4191[33]
  var i4202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.add(request.d('TMPro.TMP_Glyph', i4203[i + 0]));
  }
  i4190.m_glyphInfoList = i4202
  i4190.m_KerningTable = request.d('TMPro.KerningTable', i4191[34], i4190.m_KerningTable)
  i4190.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4191[35], i4190.m_FontFeatureTable)
  var i4205 = i4191[36]
  var i4204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4205.length; i += 2) {
  request.r(i4205[i + 0], i4205[i + 1], 1, i4204, '')
  }
  i4190.fallbackFontAssets = i4204
  var i4207 = i4191[37]
  var i4206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4207.length; i += 2) {
  request.r(i4207[i + 0], i4207[i + 1], 1, i4206, '')
  }
  i4190.m_FallbackFontAssetTable = i4206
  i4190.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4191[38], i4190.m_CreationSettings)
  var i4209 = i4191[39]
  var i4208 = []
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.push( request.d('TMPro.TMP_FontWeightPair', i4209[i + 0]) );
  }
  i4190.m_FontWeightTable = i4208
  var i4211 = i4191[40]
  var i4210 = []
  for(var i = 0; i < i4211.length; i += 1) {
    i4210.push( request.d('TMPro.TMP_FontWeightPair', i4211[i + 0]) );
  }
  i4190.fontWeights = i4210
  return i4190
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4212 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4213 = data
  i4212.m_FaceIndex = i4213[0]
  i4212.m_FamilyName = i4213[1]
  i4212.m_StyleName = i4213[2]
  i4212.m_PointSize = i4213[3]
  i4212.m_Scale = i4213[4]
  i4212.m_UnitsPerEM = i4213[5]
  i4212.m_LineHeight = i4213[6]
  i4212.m_AscentLine = i4213[7]
  i4212.m_CapLine = i4213[8]
  i4212.m_MeanLine = i4213[9]
  i4212.m_Baseline = i4213[10]
  i4212.m_DescentLine = i4213[11]
  i4212.m_SuperscriptOffset = i4213[12]
  i4212.m_SuperscriptSize = i4213[13]
  i4212.m_SubscriptOffset = i4213[14]
  i4212.m_SubscriptSize = i4213[15]
  i4212.m_UnderlineOffset = i4213[16]
  i4212.m_UnderlineThickness = i4213[17]
  i4212.m_StrikethroughOffset = i4213[18]
  i4212.m_StrikethroughThickness = i4213[19]
  i4212.m_TabWidth = i4213[20]
  return i4212
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4216 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4217 = data
  i4216.m_Index = i4217[0]
  i4216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4217[1], i4216.m_Metrics)
  i4216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4217[2], i4216.m_GlyphRect)
  i4216.m_Scale = i4217[3]
  i4216.m_AtlasIndex = i4217[4]
  i4216.m_ClassDefinitionType = i4217[5]
  return i4216
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4218 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4219 = data
  i4218.m_Width = i4219[0]
  i4218.m_Height = i4219[1]
  i4218.m_HorizontalBearingX = i4219[2]
  i4218.m_HorizontalBearingY = i4219[3]
  i4218.m_HorizontalAdvance = i4219[4]
  return i4218
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4220 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4221 = data
  i4220.m_X = i4221[0]
  i4220.m_Y = i4221[1]
  i4220.m_Width = i4221[2]
  i4220.m_Height = i4221[3]
  return i4220
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4224 = root || request.c( 'TMPro.TMP_Character' )
  var i4225 = data
  i4224.m_ElementType = i4225[0]
  i4224.m_Unicode = i4225[1]
  i4224.m_GlyphIndex = i4225[2]
  i4224.m_Scale = i4225[3]
  return i4224
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4230 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4231 = data
  i4230.Name = i4231[0]
  i4230.PointSize = i4231[1]
  i4230.Scale = i4231[2]
  i4230.CharacterCount = i4231[3]
  i4230.LineHeight = i4231[4]
  i4230.Baseline = i4231[5]
  i4230.Ascender = i4231[6]
  i4230.CapHeight = i4231[7]
  i4230.Descender = i4231[8]
  i4230.CenterLine = i4231[9]
  i4230.SuperscriptOffset = i4231[10]
  i4230.SubscriptOffset = i4231[11]
  i4230.SubSize = i4231[12]
  i4230.Underline = i4231[13]
  i4230.UnderlineThickness = i4231[14]
  i4230.strikethrough = i4231[15]
  i4230.strikethroughThickness = i4231[16]
  i4230.TabWidth = i4231[17]
  i4230.Padding = i4231[18]
  i4230.AtlasWidth = i4231[19]
  i4230.AtlasHeight = i4231[20]
  return i4230
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4234 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4235 = data
  i4234.id = i4235[0]
  i4234.x = i4235[1]
  i4234.y = i4235[2]
  i4234.width = i4235[3]
  i4234.height = i4235[4]
  i4234.xOffset = i4235[5]
  i4234.yOffset = i4235[6]
  i4234.xAdvance = i4235[7]
  i4234.scale = i4235[8]
  return i4234
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4236 = root || request.c( 'TMPro.KerningTable' )
  var i4237 = data
  var i4239 = i4237[0]
  var i4238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.add(request.d('TMPro.KerningPair', i4239[i + 0]));
  }
  i4236.kerningPairs = i4238
  return i4236
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4242 = root || request.c( 'TMPro.KerningPair' )
  var i4243 = data
  i4242.xOffset = i4243[0]
  i4242.m_FirstGlyph = i4243[1]
  i4242.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4243[2], i4242.m_FirstGlyphAdjustments)
  i4242.m_SecondGlyph = i4243[3]
  i4242.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4243[4], i4242.m_SecondGlyphAdjustments)
  i4242.m_IgnoreSpacingAdjustments = !!i4243[5]
  return i4242
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4244 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4245 = data
  var i4247 = i4245[0]
  var i4246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4247.length; i += 1) {
    i4246.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4247[i + 0]));
  }
  i4244.m_GlyphPairAdjustmentRecords = i4246
  return i4244
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4250 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4251 = data
  i4250.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4251[0], i4250.m_FirstAdjustmentRecord)
  i4250.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4251[1], i4250.m_SecondAdjustmentRecord)
  i4250.m_FeatureLookupFlags = i4251[2]
  return i4250
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4254 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4255 = data
  i4254.sourceFontFileName = i4255[0]
  i4254.sourceFontFileGUID = i4255[1]
  i4254.pointSizeSamplingMode = i4255[2]
  i4254.pointSize = i4255[3]
  i4254.padding = i4255[4]
  i4254.packingMode = i4255[5]
  i4254.atlasWidth = i4255[6]
  i4254.atlasHeight = i4255[7]
  i4254.characterSetSelectionMode = i4255[8]
  i4254.characterSequence = i4255[9]
  i4254.referencedFontAssetGUID = i4255[10]
  i4254.referencedTextAssetGUID = i4255[11]
  i4254.fontStyle = i4255[12]
  i4254.fontStyleModifier = i4255[13]
  i4254.renderMode = i4255[14]
  i4254.includeFontFeatures = !!i4255[15]
  return i4254
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4258 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4259 = data
  request.r(i4259[0], i4259[1], 0, i4258, 'regularTypeface')
  request.r(i4259[2], i4259[3], 0, i4258, 'italicTypeface')
  return i4258
}

Deserializers["ItemData"] = function (request, data, root) {
  var i4260 = root || request.c( 'ItemData' )
  var i4261 = data
  i4260.itemName = i4261[0]
  request.r(i4261[1], i4261[2], 0, i4260, 'itemIcon')
  i4260.ItemCount = i4261[3]
  request.r(i4261[4], i4261[5], 0, i4260, 'collectItemSprite')
  i4260.color = i4261[6]
  request.r(i4261[7], i4261[8], 0, i4260, 'DecorationSprite')
  return i4260
}

Deserializers["TileData"] = function (request, data, root) {
  var i4262 = root || request.c( 'TileData' )
  var i4263 = data
  i4262.tileName = i4263[0]
  request.r(i4263[1], i4263[2], 0, i4262, 'tileSprite')
  i4262.isPowerup = !!i4263[3]
  i4262.isBreakable = !!i4263[4]
  i4262.isSwappable = !!i4263[5]
  i4262.isSpecialBreakable = !!i4263[6]
  return i4262
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i4264 = root || request.c( 'DynamitePowerup' )
  var i4265 = data
  i4264.explosionRadius = i4265[0]
  i4264.tileName = i4265[1]
  request.r(i4265[2], i4265[3], 0, i4264, 'tileSprite')
  i4264.isPowerup = !!i4265[4]
  i4264.isBreakable = !!i4265[5]
  i4264.isSwappable = !!i4265[6]
  i4264.isSpecialBreakable = !!i4265[7]
  return i4264
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i4266 = root || request.c( 'AudioLibrary' )
  var i4267 = data
  var i4269 = i4267[0]
  var i4268 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i4269.length; i += 1) {
    i4268.add(request.d('AudioLibrary+ClipEntry', i4269[i + 0]));
  }
  i4266.clips = i4268
  return i4266
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i4272 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i4273 = data
  i4272.key = i4273[0]
  i4272.channel = i4273[1]
  request.r(i4273[2], i4273[3], 0, i4272, 'clip')
  i4272.volume = i4273[4]
  i4272.loop = !!i4273[5]
  return i4272
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4274 = root || request.c( 'TMPro.TMP_Settings' )
  var i4275 = data
  i4274.m_enableWordWrapping = !!i4275[0]
  i4274.m_enableKerning = !!i4275[1]
  i4274.m_enableExtraPadding = !!i4275[2]
  i4274.m_enableTintAllSprites = !!i4275[3]
  i4274.m_enableParseEscapeCharacters = !!i4275[4]
  i4274.m_EnableRaycastTarget = !!i4275[5]
  i4274.m_GetFontFeaturesAtRuntime = !!i4275[6]
  i4274.m_missingGlyphCharacter = i4275[7]
  i4274.m_warningsDisabled = !!i4275[8]
  request.r(i4275[9], i4275[10], 0, i4274, 'm_defaultFontAsset')
  i4274.m_defaultFontAssetPath = i4275[11]
  i4274.m_defaultFontSize = i4275[12]
  i4274.m_defaultAutoSizeMinRatio = i4275[13]
  i4274.m_defaultAutoSizeMaxRatio = i4275[14]
  i4274.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4275[15], i4275[16] )
  i4274.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4275[17], i4275[18] )
  i4274.m_autoSizeTextContainer = !!i4275[19]
  i4274.m_IsTextObjectScaleStatic = !!i4275[20]
  var i4277 = i4275[21]
  var i4276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4277.length; i += 2) {
  request.r(i4277[i + 0], i4277[i + 1], 1, i4276, '')
  }
  i4274.m_fallbackFontAssets = i4276
  i4274.m_matchMaterialPreset = !!i4275[22]
  request.r(i4275[23], i4275[24], 0, i4274, 'm_defaultSpriteAsset')
  i4274.m_defaultSpriteAssetPath = i4275[25]
  i4274.m_enableEmojiSupport = !!i4275[26]
  i4274.m_MissingCharacterSpriteUnicode = i4275[27]
  i4274.m_defaultColorGradientPresetsPath = i4275[28]
  request.r(i4275[29], i4275[30], 0, i4274, 'm_defaultStyleSheet')
  i4274.m_StyleSheetsResourcePath = i4275[31]
  request.r(i4275[32], i4275[33], 0, i4274, 'm_leadingCharacters')
  request.r(i4275[34], i4275[35], 0, i4274, 'm_followingCharacters')
  i4274.m_UseModernHangulLineBreakingRules = !!i4275[36]
  return i4274
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4278 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4279 = data
  i4278.hashCode = i4279[0]
  request.r(i4279[1], i4279[2], 0, i4278, 'material')
  i4278.materialHashCode = i4279[3]
  request.r(i4279[4], i4279[5], 0, i4278, 'spriteSheet')
  var i4281 = i4279[6]
  var i4280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4281.length; i += 1) {
    i4280.add(request.d('TMPro.TMP_Sprite', i4281[i + 0]));
  }
  i4278.spriteInfoList = i4280
  var i4283 = i4279[7]
  var i4282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4283.length; i += 2) {
  request.r(i4283[i + 0], i4283[i + 1], 1, i4282, '')
  }
  i4278.fallbackSpriteAssets = i4282
  i4278.m_Version = i4279[8]
  i4278.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4279[9], i4278.m_FaceInfo)
  var i4285 = i4279[10]
  var i4284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.add(request.d('TMPro.TMP_SpriteCharacter', i4285[i + 0]));
  }
  i4278.m_SpriteCharacterTable = i4284
  var i4287 = i4279[11]
  var i4286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4287.length; i += 1) {
    i4286.add(request.d('TMPro.TMP_SpriteGlyph', i4287[i + 0]));
  }
  i4278.m_SpriteGlyphTable = i4286
  return i4278
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4290 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4291 = data
  i4290.name = i4291[0]
  i4290.hashCode = i4291[1]
  i4290.unicode = i4291[2]
  i4290.pivot = new pc.Vec2( i4291[3], i4291[4] )
  request.r(i4291[5], i4291[6], 0, i4290, 'sprite')
  i4290.id = i4291[7]
  i4290.x = i4291[8]
  i4290.y = i4291[9]
  i4290.width = i4291[10]
  i4290.height = i4291[11]
  i4290.xOffset = i4291[12]
  i4290.yOffset = i4291[13]
  i4290.xAdvance = i4291[14]
  i4290.scale = i4291[15]
  return i4290
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4296 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4297 = data
  i4296.m_Name = i4297[0]
  i4296.m_HashCode = i4297[1]
  i4296.m_ElementType = i4297[2]
  i4296.m_Unicode = i4297[3]
  i4296.m_GlyphIndex = i4297[4]
  i4296.m_Scale = i4297[5]
  return i4296
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4300 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4301 = data
  request.r(i4301[0], i4301[1], 0, i4300, 'sprite')
  i4300.m_Index = i4301[2]
  i4300.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4301[3], i4300.m_Metrics)
  i4300.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4301[4], i4300.m_GlyphRect)
  i4300.m_Scale = i4301[5]
  i4300.m_AtlasIndex = i4301[6]
  i4300.m_ClassDefinitionType = i4301[7]
  return i4300
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4302 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4303 = data
  var i4305 = i4303[0]
  var i4304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.add(request.d('TMPro.TMP_Style', i4305[i + 0]));
  }
  i4302.m_StyleList = i4304
  return i4302
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4308 = root || request.c( 'TMPro.TMP_Style' )
  var i4309 = data
  i4308.m_Name = i4309[0]
  i4308.m_HashCode = i4309[1]
  i4308.m_OpeningDefinition = i4309[2]
  i4308.m_ClosingDefinition = i4309[3]
  i4308.m_OpeningTagArray = i4309[4]
  i4308.m_ClosingTagArray = i4309[5]
  i4308.m_OpeningTagUnicodeArray = i4309[6]
  i4308.m_ClosingTagUnicodeArray = i4309[7]
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4311 = data
  var i4313 = i4311[0]
  var i4312 = []
  for(var i = 0; i < i4313.length; i += 1) {
    i4312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4313[i + 0]) );
  }
  i4310.files = i4312
  i4310.componentToPrefabIds = i4311[1]
  return i4310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4317 = data
  i4316.path = i4317[0]
  request.r(i4317[1], i4317[2], 0, i4316, 'unityObject')
  return i4316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4319 = data
  var i4321 = i4319[0]
  var i4320 = []
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4321[i + 0]) );
  }
  i4318.scriptsExecutionOrder = i4320
  var i4323 = i4319[1]
  var i4322 = []
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4323[i + 0]) );
  }
  i4318.sortingLayers = i4322
  var i4325 = i4319[2]
  var i4324 = []
  for(var i = 0; i < i4325.length; i += 1) {
    i4324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4325[i + 0]) );
  }
  i4318.cullingLayers = i4324
  i4318.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4319[3], i4318.timeSettings)
  i4318.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4319[4], i4318.physicsSettings)
  i4318.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4319[5], i4318.physics2DSettings)
  i4318.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4319[6], i4318.qualitySettings)
  i4318.enableRealtimeShadows = !!i4319[7]
  i4318.enableAutoInstancing = !!i4319[8]
  i4318.enableDynamicBatching = !!i4319[9]
  i4318.lightmapEncodingQuality = i4319[10]
  i4318.desiredColorSpace = i4319[11]
  var i4327 = i4319[12]
  var i4326 = []
  for(var i = 0; i < i4327.length; i += 1) {
    i4326.push( i4327[i + 0] );
  }
  i4318.allTags = i4326
  return i4318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4331 = data
  i4330.name = i4331[0]
  i4330.value = i4331[1]
  return i4330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4335 = data
  i4334.id = i4335[0]
  i4334.name = i4335[1]
  i4334.value = i4335[2]
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4339 = data
  i4338.id = i4339[0]
  i4338.name = i4339[1]
  return i4338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4341 = data
  i4340.fixedDeltaTime = i4341[0]
  i4340.maximumDeltaTime = i4341[1]
  i4340.timeScale = i4341[2]
  i4340.maximumParticleTimestep = i4341[3]
  return i4340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4343 = data
  i4342.gravity = new pc.Vec3( i4343[0], i4343[1], i4343[2] )
  i4342.defaultSolverIterations = i4343[3]
  i4342.bounceThreshold = i4343[4]
  i4342.autoSyncTransforms = !!i4343[5]
  i4342.autoSimulation = !!i4343[6]
  var i4345 = i4343[7]
  var i4344 = []
  for(var i = 0; i < i4345.length; i += 1) {
    i4344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4345[i + 0]) );
  }
  i4342.collisionMatrix = i4344
  return i4342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4349 = data
  i4348.enabled = !!i4349[0]
  i4348.layerId = i4349[1]
  i4348.otherLayerId = i4349[2]
  return i4348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4351 = data
  request.r(i4351[0], i4351[1], 0, i4350, 'material')
  i4350.gravity = new pc.Vec2( i4351[2], i4351[3] )
  i4350.positionIterations = i4351[4]
  i4350.velocityIterations = i4351[5]
  i4350.velocityThreshold = i4351[6]
  i4350.maxLinearCorrection = i4351[7]
  i4350.maxAngularCorrection = i4351[8]
  i4350.maxTranslationSpeed = i4351[9]
  i4350.maxRotationSpeed = i4351[10]
  i4350.baumgarteScale = i4351[11]
  i4350.baumgarteTOIScale = i4351[12]
  i4350.timeToSleep = i4351[13]
  i4350.linearSleepTolerance = i4351[14]
  i4350.angularSleepTolerance = i4351[15]
  i4350.defaultContactOffset = i4351[16]
  i4350.autoSimulation = !!i4351[17]
  i4350.queriesHitTriggers = !!i4351[18]
  i4350.queriesStartInColliders = !!i4351[19]
  i4350.callbacksOnDisable = !!i4351[20]
  i4350.reuseCollisionCallbacks = !!i4351[21]
  i4350.autoSyncTransforms = !!i4351[22]
  var i4353 = i4351[23]
  var i4352 = []
  for(var i = 0; i < i4353.length; i += 1) {
    i4352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4353[i + 0]) );
  }
  i4350.collisionMatrix = i4352
  return i4350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4357 = data
  i4356.enabled = !!i4357[0]
  i4356.layerId = i4357[1]
  i4356.otherLayerId = i4357[2]
  return i4356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4359 = data
  var i4361 = i4359[0]
  var i4360 = []
  for(var i = 0; i < i4361.length; i += 1) {
    i4360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4361[i + 0]) );
  }
  i4358.qualityLevels = i4360
  var i4363 = i4359[1]
  var i4362 = []
  for(var i = 0; i < i4363.length; i += 1) {
    i4362.push( i4363[i + 0] );
  }
  i4358.names = i4362
  i4358.shadows = i4359[2]
  i4358.anisotropicFiltering = i4359[3]
  i4358.antiAliasing = i4359[4]
  i4358.lodBias = i4359[5]
  i4358.shadowCascades = i4359[6]
  i4358.shadowDistance = i4359[7]
  i4358.shadowmaskMode = i4359[8]
  i4358.shadowProjection = i4359[9]
  i4358.shadowResolution = i4359[10]
  i4358.softParticles = !!i4359[11]
  i4358.softVegetation = !!i4359[12]
  i4358.activeColorSpace = i4359[13]
  i4358.desiredColorSpace = i4359[14]
  i4358.masterTextureLimit = i4359[15]
  i4358.maxQueuedFrames = i4359[16]
  i4358.particleRaycastBudget = i4359[17]
  i4358.pixelLightCount = i4359[18]
  i4358.realtimeReflectionProbes = !!i4359[19]
  i4358.shadowCascade2Split = i4359[20]
  i4358.shadowCascade4Split = new pc.Vec3( i4359[21], i4359[22], i4359[23] )
  i4358.streamingMipmapsActive = !!i4359[24]
  i4358.vSyncCount = i4359[25]
  i4358.asyncUploadBufferSize = i4359[26]
  i4358.asyncUploadTimeSlice = i4359[27]
  i4358.billboardsFaceCameraPosition = !!i4359[28]
  i4358.shadowNearPlaneOffset = i4359[29]
  i4358.streamingMipmapsMemoryBudget = i4359[30]
  i4358.maximumLODLevel = i4359[31]
  i4358.streamingMipmapsAddAllCameras = !!i4359[32]
  i4358.streamingMipmapsMaxLevelReduction = i4359[33]
  i4358.streamingMipmapsRenderersPerFrame = i4359[34]
  i4358.resolutionScalingFixedDPIFactor = i4359[35]
  i4358.streamingMipmapsMaxFileIORequests = i4359[36]
  i4358.currentQualityLevel = i4359[37]
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4369 = data
  i4368.weight = i4369[0]
  i4368.vertices = i4369[1]
  i4368.normals = i4369[2]
  i4368.tangents = i4369[3]
  return i4368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4373 = data
  i4372.mode = i4373[0]
  i4372.parameter = i4373[1]
  i4372.threshold = i4373[2]
  return i4372
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4374 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4375 = data
  i4374.xPlacement = i4375[0]
  i4374.yPlacement = i4375[1]
  i4374.xAdvance = i4375[2]
  i4374.yAdvance = i4375[3]
  return i4374
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4376 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4377 = data
  i4376.m_GlyphIndex = i4377[0]
  i4376.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4377[1], i4376.m_GlyphValueRecord)
  return i4376
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4378 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4379 = data
  i4378.m_XPlacement = i4379[0]
  i4378.m_YPlacement = i4379[1]
  i4378.m_XAdvance = i4379[2]
  i4378.m_YAdvance = i4379[3]
  return i4378
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[27],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[27],"97":[98],"99":[100],"101":[100],"29":[0],"20":[17],"102":[17],"103":[17],"104":[27],"105":[106],"107":[0],"108":[1,0],"109":[98],"110":[1,0],"111":[50,98],"112":[98],"113":[98,114],"115":[75],"116":[83],"117":[106],"118":[119],"120":[49],"121":[27],"122":[123],"124":[0],"125":[98,0],"5":[0,1],"126":[0],"127":[1,0],"128":[98],"129":[1,0],"130":[0],"131":[132],"133":[132],"134":[132],"135":[0],"136":[0],"31":[29],"4":[1,0],"137":[0],"30":[29],"138":[0],"46":[0],"44":[0],"139":[0],"140":[0],"141":[0],"142":[0],"47":[0],"143":[0],"144":[1,0],"145":[0],"146":[0],"147":[0],"148":[0],"149":[1,0],"150":[0],"151":[53],"152":[53],"54":[53],"153":[53],"154":[27],"155":[27]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","AppearAnimation","PlayerGuide","UnityEngine.UI.Button","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","TransformOrientation","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","GameOrientationHandler","UnityEngine.Font","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "3.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Renovation";

Deserializers.lunaAppID = "32752";

Deserializers.projectId = "bab41f24a77b7a944b71277894eff5d3";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.8.2\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1941";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5487";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "e9b08f3f-9a85-4399-9e1c-9ecae2719725";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

